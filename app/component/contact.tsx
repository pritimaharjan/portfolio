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
    <div className="bg-[#0f172a] dark:bg-background">
      <main
        id="contact"
        className="   py-32 flex flex-col justify-center items-center "
      >
        <div className="max-w-7xl mx-auto  px-4 grid justify-between grid-cols-1 md:grid-cols-2 md:gap-50 text-whitegap-10 ">
          <div className="col-span-1">
            <h1 className="text-5xl sm:text-6xl font-semibold  typo-primary dark:text-white ">
              Lets connect
            </h1>
            <p className="mb-4 text-2xl typo-secondary">
              I’m open to collaboration or freelance projects.
            </p>
          </div>
          <div className=" col-span-1 flex flex-col gap-6 ">
            {ContactInfo.map((contact) => (
              <div key={contact.type} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">{contact.logo}</div>
                  <div>
                    <p className="typo-secondary">{contact.type}</p>
                    <p className="typo-primary">{contact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
