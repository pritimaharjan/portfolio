import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ContactInfo = [
  {
    logo: "📧",
    type: "Email",
    value: "pritimaharjan39@gmail.com",
  },
  {
    logo: "📞",
    type: "Phone",
    value: "+977-9745619463",
  },
  { logo: "📍", type: "Location", value: "Nakhipot,Lalitpur" },
];

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <main
        id="contact"
        className="container mx-auto  px-16 py-24 flex flex-col justify-center items-center bg-gray-50"
      >
        <h1 className="text-4xl sm:text-6xl font-semibold text-center text-primary">
          Get In Touch
        </h1>
        <div className="flex flex-col items-center mt-10">
          <div>
            <p className="mb-4 ">
              I’m open to collaboration, internships, or freelance projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 ">
            {ContactInfo.map((contact) => (
              <Card key={contact.type} className="text-center p-4">
                <CardHeader>{contact.logo}</CardHeader>
                <CardTitle className="">{contact.type}</CardTitle>
                <CardContent>{contact.value}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
