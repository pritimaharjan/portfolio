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
    <div id="contact" className="py-32 bg-background dark:bg-black">
      <main
        id="contact"
        className="py-32 flex flex-col justify-center items-center "
      >
        <div className="max-w-7xl mx-auto  px-4 grid justify-between grid-cols-1 md:grid-cols-2 md:gap-50 text-whitegap-10 ">
          <div className="col-span-1">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                Let's {""}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  connect
                </span>
              </h3>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                I&apos;m Available For New Opportunities
              </span>
            </div>
          </div>
          <div className=" col-span-1 flex flex-col gap-6 ">
            {ContactInfo.map((contact) => (
              <div key={contact.type} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">{contact.logo}</div>
                  <div>
                    <p className="typo-black dark:text-white">{contact.type}</p>
                    <p className="typo-black dark:text-white">
                      {contact.value}
                    </p>
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
