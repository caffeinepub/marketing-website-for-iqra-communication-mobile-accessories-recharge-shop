import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useCreateInquiry } from '@/hooks/useQueries';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const createInquiry = useCreateInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await createInquiry.mutateAsync({ name: name.trim(), phone: phone.trim(), message: message.trim() });
      toast.success('Thank you! Your inquiry has been submitted successfully.');
      setName('');
      setPhone('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <Card className="border-2 border-teal-100">
      <CardHeader>
        <CardTitle className="text-2xl text-teal-700">Send Us a Message</CardTitle>
        <CardDescription>
          Have a question or need assistance? Fill out the form below and we'll get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Message <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help you..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={createInquiry.isPending}
            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-6 text-lg"
          >
            {createInquiry.isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : createInquiry.isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Sent Successfully!
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
