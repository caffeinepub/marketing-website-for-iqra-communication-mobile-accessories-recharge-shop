import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Inquiry Management
  public type Inquiry = {
    name : Text;
    phone : Text;
    message : Text;
  };

  type InquiryId = Nat;

  let inquiries = Map.empty<InquiryId, Inquiry>();
  var nextInquiryId = 0;

  public shared ({ caller }) func createInquiry(name : Text, phone : Text, message : Text) : async InquiryId {
    if (name.size() == 0 or message.size() == 0) {
      Runtime.trap("Name and message cannot be empty");
    };

    let inquiryId = nextInquiryId;
    nextInquiryId += 1;

    let inquiry : Inquiry = {
      name;
      phone;
      message;
    };

    inquiries.add(inquiryId, inquiry);
    inquiryId;
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.values().toArray();
  };
};
