import { useListInquiries } from '@/hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2, Inbox, Phone, User, MessageSquare } from 'lucide-react';

export default function InquiriesTable() {
  const { data: inquiries, isLoading, isError } = useListInquiries();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto" />
            <p className="text-gray-600">Loading inquiries...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="border-red-200">
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Failed to load inquiries</p>
              <p className="text-gray-600">Please try refreshing the page</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!inquiries || inquiries.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-teal-700">Customer Inquiries</CardTitle>
          <CardDescription>View and manage customer inquiries from the website</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <Inbox className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">No inquiries yet</p>
              <p className="text-gray-600">Customer inquiries will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Sort inquiries newest first (reverse order since backend doesn't provide timestamps)
  const sortedInquiries = [...inquiries].reverse();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-teal-700">Customer Inquiries</CardTitle>
        <CardDescription>
          Total inquiries: <span className="font-semibold text-teal-700">{inquiries.length}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-50">
                <TableHead className="font-semibold text-teal-900">#</TableHead>
                <TableHead className="font-semibold text-teal-900">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-teal-900">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-teal-900">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedInquiries.map((inquiry, index) => (
                <TableRow key={index} className="hover:bg-teal-50/50">
                  <TableCell className="font-medium text-gray-600">
                    {sortedInquiries.length - index}
                  </TableCell>
                  <TableCell className="font-medium text-gray-900">
                    {inquiry.name}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {inquiry.phone || (
                      <span className="text-gray-400 italic">Not provided</span>
                    )}
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="text-gray-700 line-clamp-2">{inquiry.message}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
