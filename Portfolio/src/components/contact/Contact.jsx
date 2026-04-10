import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-black sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-black block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                A good software developer for your project?
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ open: false, success: true, text: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const payload = {
        _replyto: email,
        name,
        phone,
        message,
        _subject: "New contact via portfolio",
        _captcha: false,
      };
      const res = await fetch("https://formsubmit.co/ajax/filipe10colla@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === true || data.message)) {
        setToast({ open: true, success: true, text: "Message sent successfully" });
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        setCountryCode("");
        setSending(false);
        setTimeout(() => setToast((t)=>({ ...t, open: false })), 2500);
      } else {
        setToast({ open: true, success: false, text: data.message || "Failed to send message" });
        setSending(false);
      }
    } catch {
      setToast({ open: true, success: false, text: "Network error" });
      setSending(false);
    }
  };

  return (
    <>
      <form
        data-aos="zoom-in"
        onSubmit={onSubmit}
        className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
      >
        <div className="w-full">
          <label className="text-sm font-semibold text-black">Country code</label>
          <select
            className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
            value={countryCode}
            onChange={(e) => {
              const code = e.target.value;
              setCountryCode(code);
              setPhone(code ? `${code} ` : "");
            }}
          >
            <option value="">Select the country</option>
            {[...DIAL_CODES].sort((a,b)=>a.label.localeCompare(b.label)).map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>
        <input
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
          type="email"
          placeholder="e.g. example@email.com"
          aria-label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
          type="text"
          placeholder="e.g. Your name"
          aria-label="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
          type="text"
          placeholder={countryCode === "" ? "Select the country first" : countryCode === "+55" ? "+55 (DD) 9XXXX-XXXX" : countryCode === "+1" ? "+1 (XXX) XXX-XXXX" : `${countryCode} phone number`}
          aria-label="Phone"
          value={phone}
          onChange={(e) => setPhone(formatPhone(countryCode, e.target.value))}
        />
        <textarea
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
          rows="4"
          cols="50"
          placeholder="Write your message"
          aria-label="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-black w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1 disabled:opacity-60"
          type="submit"
          disabled={sending}
        >
          <span>{sending ? "Sending..." : "Send"}</span>
          <RiSendPlaneFill/>
        </button>
      </form>

      {toast.open && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md border-2 ${toast.success ? "bg-green-100 border-green-600 text-green-800" : "bg-red-100 border-red-600 text-red-800"}`} role="alert" aria-live="assertive">
          {toast.text}
        </div>
      )}
    </>
  );
};

function formatPhone(code, value) {
  const digits = (value || "").replace(/\D/g, "");
  const codeDigits = code.replace(/\D/g, "");
  let rest = digits.startsWith(codeDigits) ? digits.slice(codeDigits.length) : digits;
  if (code === "+55") {
    const ddd = rest.slice(0, 2);
    const local = rest.slice(2, 11);
    let out = `${code} `;
    if (ddd.length) out += `(${ddd}${ddd.length === 2 ? ") " : ""}`;
    if (local.length) {
      if (local.length <= 5) out += local;
      else out += `${local.slice(0,5)}-${local.slice(5,9)}`;
    }
    return out.trim();
  }
  if (code === "+1") {
    const a = rest.slice(0,3);
    const b = rest.slice(3,6);
    const c = rest.slice(6,10);
    let out = `${code} `;
    if (a.length) out += `(${a}${a.length === 3 ? ") " : ""}`;
    if (b.length) out += b.length < 3 ? b : `${b} `;
    if (c.length) out += c;
    return out.trim();
  }
  // default E.164 grouping
  const groups = [];
  for (let i = 0; i < rest.length; i += 3) groups.push(rest.slice(i, i + 3));
  const joined = groups.join(" ");
  return `${code} ${joined}`.trim();
}

const DIAL_CODES = [
  { code: "+1", label: "United States/Canada (+1)" },
  { code: "+7", label: "Russia/Kazakhstan (+7)" },
  { code: "+20", label: "Egypt (+20)" },
  { code: "+27", label: "South Africa (+27)" },
  { code: "+30", label: "Greece (+30)" },
  { code: "+31", label: "Netherlands (+31)" },
  { code: "+32", label: "Belgium (+32)" },
  { code: "+33", label: "France (+33)" },
  { code: "+34", label: "Spain (+34)" },
  { code: "+36", label: "Hungary (+36)" },
  { code: "+39", label: "Italy (+39)" },
  { code: "+40", label: "Romania (+40)" },
  { code: "+41", label: "Switzerland (+41)" },
  { code: "+43", label: "Austria (+43)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+45", label: "Denmark (+45)" },
  { code: "+46", label: "Sweden (+46)" },
  { code: "+47", label: "Norway (+47)" },
  { code: "+48", label: "Poland (+48)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+51", label: "Peru (+51)" },
  { code: "+52", label: "Mexico (+52)" },
  { code: "+53", label: "Cuba (+53)" },
  { code: "+54", label: "Argentina (+54)" },
  { code: "+55", label: "Brazil (+55)" },
  { code: "+56", label: "Chile (+56)" },
  { code: "+57", label: "Colombia (+57)" },
  { code: "+58", label: "Venezuela (+58)" },
  { code: "+60", label: "Malaysia (+60)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+62", label: "Indonesia (+62)" },
  { code: "+63", label: "Philippines (+63)" },
  { code: "+64", label: "New Zealand (+64)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+66", label: "Thailand (+66)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+82", label: "South Korea (+82)" },
  { code: "+84", label: "Vietnam (+84)" },
  { code: "+86", label: "China (+86)" },
  { code: "+90", label: "Turkey (+90)" },
  { code: "+91", label: "India (+91)" },
  { code: "+92", label: "Pakistan (+92)" },
  { code: "+93", label: "Afghanistan (+93)" },
  { code: "+94", label: "Sri Lanka (+94)" },
  { code: "+95", label: "Myanmar (+95)" },
  { code: "+98", label: "Iran (+98)" },
  { code: "+212", label: "Morocco (+212)" },
  { code: "+213", label: "Algeria (+213)" },
  { code: "+216", label: "Tunisia (+216)" },
  { code: "+218", label: "Libya (+218)" },
  { code: "+220", label: "Gambia (+220)" },
  { code: "+221", label: "Senegal (+221)" },
  { code: "+222", label: "Mauritania (+222)" },
  { code: "+223", label: "Mali (+223)" },
  { code: "+224", label: "Guinea (+224)" },
  { code: "+225", label: "Côte d’Ivoire (+225)" },
  { code: "+226", label: "Burkina Faso (+226)" },
  { code: "+227", label: "Niger (+227)" },
  { code: "+228", label: "Togo (+228)" },
  { code: "+229", label: "Benin (+229)" },
  { code: "+230", label: "Mauritius (+230)" },
  { code: "+231", label: "Liberia (+231)" },
  { code: "+232", label: "Sierra Leone (+232)" },
  { code: "+233", label: "Ghana (+233)" },
  { code: "+234", label: "Nigeria (+234)" },
  { code: "+235", label: "Chad (+235)" },
  { code: "+236", label: "Central African Republic (+236)" },
  { code: "+237", label: "Cameroon (+237)" },
  { code: "+238", label: "Cape Verde (+238)" },
  { code: "+239", label: "São Tomé and Príncipe (+239)" },
  { code: "+240", label: "Equatorial Guinea (+240)" },
  { code: "+241", label: "Gabon (+241)" },
  { code: "+242", label: "Congo (+242)" },
  { code: "+243", label: "DR Congo (+243)" },
  { code: "+244", label: "Angola (+244)" },
  { code: "+245", label: "Guinea-Bissau (+245)" },
  { code: "+246", label: "British Indian Ocean Territory (+246)" },
  { code: "+247", label: "Ascension (+247)" },
  { code: "+248", label: "Seychelles (+248)" },
  { code: "+249", label: "Sudan (+249)" },
  { code: "+250", label: "Rwanda (+250)" },
  { code: "+251", label: "Ethiopia (+251)" },
  { code: "+252", label: "Somalia (+252)" },
  { code: "+253", label: "Djibouti (+253)" },
  { code: "+254", label: "Kenya (+254)" },
  { code: "+255", label: "Tanzania (+255)" },
  { code: "+256", label: "Uganda (+256)" },
  { code: "+257", label: "Burundi (+257)" },
  { code: "+258", label: "Mozambique (+258)" },
  { code: "+260", label: "Zambia (+260)" },
  { code: "+261", label: "Madagascar (+261)" },
  { code: "+262", label: "Réunion/Mayotte (+262)" },
  { code: "+263", label: "Zimbabwe (+263)" },
  { code: "+264", label: "Namibia (+264)" },
  { code: "+265", label: "Malawi (+265)" },
  { code: "+266", label: "Lesotho (+266)" },
  { code: "+267", label: "Botswana (+267)" },
  { code: "+268", label: "Eswatini (+268)" },
  { code: "+269", label: "Comoros (+269)" },
  { code: "+290", label: "Saint Helena (+290)" },
  { code: "+297", label: "Aruba (+297)" },
  { code: "+298", label: "Faroe Islands (+298)" },
  { code: "+299", label: "Greenland (+299)" },
  { code: "+350", label: "Gibraltar (+350)" },
  { code: "+351", label: "Portugal (+351)" },
  { code: "+352", label: "Luxembourg (+352)" },
  { code: "+353", label: "Ireland (+353)" },
  { code: "+354", label: "Iceland (+354)" },
  { code: "+355", label: "Albania (+355)" },
  { code: "+356", label: "Malta (+356)" },
  { code: "+357", label: "Cyprus (+357)" },
  { code: "+358", label: "Finland (+358)" },
  { code: "+359", label: "Bulgaria (+359)" },
  { code: "+370", label: "Lithuania (+370)" },
  { code: "+371", label: "Latvia (+371)" },
  { code: "+372", label: "Estonia (+372)" },
  { code: "+373", label: "Moldova (+373)" },
  { code: "+374", label: "Armenia (+374)" },
  { code: "+375", label: "Belarus (+375)" },
  { code: "+376", label: "Andorra (+376)" },
  { code: "+377", label: "Monaco (+377)" },
  { code: "+378", label: "San Marino (+378)" },
  { code: "+380", label: "Ukraine (+380)" },
  { code: "+381", label: "Serbia (+381)" },
  { code: "+382", label: "Montenegro (+382)" },
  { code: "+383", label: "Kosovo (+383)" },
  { code: "+385", label: "Croatia (+385)" },
  { code: "+386", label: "Slovenia (+386)" },
  { code: "+387", label: "Bosnia and Herzegovina (+387)" },
  { code: "+389", label: "North Macedonia (+389)" },
  { code: "+420", label: "Czechia (+420)" },
  { code: "+421", label: "Slovakia (+421)" },
  { code: "+423", label: "Liechtenstein (+423)" },
  { code: "+500", label: "Falkland Islands (+500)" },
  { code: "+501", label: "Belize (+501)" },
  { code: "+502", label: "Guatemala (+502)" },
  { code: "+503", label: "El Salvador (+503)" },
  { code: "+504", label: "Honduras (+504)" },
  { code: "+505", label: "Nicaragua (+505)" },
  { code: "+506", label: "Costa Rica (+506)" },
  { code: "+507", label: "Panama (+507)" },
  { code: "+508", label: "Saint Pierre and Miquelon (+508)" },
  { code: "+509", label: "Haiti (+509)" },
  { code: "+590", label: "Guadeloupe (+590)" },
  { code: "+591", label: "Bolivia (+591)" },
  { code: "+592", label: "Guyana (+592)" },
  { code: "+593", label: "Ecuador (+593)" },
  { code: "+594", label: "French Guiana (+594)" },
  { code: "+595", label: "Paraguay (+595)" },
  { code: "+596", label: "Martinique (+596)" },
  { code: "+597", label: "Suriname (+597)" },
  { code: "+598", label: "Uruguay (+598)" },
  { code: "+599", label: "Caribbean Netherlands (+599)" },
  { code: "+670", label: "Timor-Leste (+670)" },
  { code: "+672", label: "Antarctica/Norfolk Island (+672)" },
  { code: "+673", label: "Brunei (+673)" },
  { code: "+674", label: "Nauru (+674)" },
  { code: "+675", label: "Papua New Guinea (+675)" },
  { code: "+676", label: "Tonga (+676)" },
  { code: "+677", label: "Solomon Islands (+677)" },
  { code: "+678", label: "Vanuatu (+678)" },
  { code: "+679", label: "Fiji (+679)" },
  { code: "+680", label: "Palau (+680)" },
  { code: "+681", label: "Wallis and Futuna (+681)" },
  { code: "+682", label: "Cook Islands (+682)" },
  { code: "+685", label: "Samoa (+685)" },
  { code: "+686", label: "Kiribati (+686)" },
  { code: "+687", label: "New Caledonia (+687)" },
  { code: "+688", label: "Tuvalu (+688)" },
  { code: "+689", label: "French Polynesia (+689)" },
  { code: "+690", label: "Tokelau (+690)" },
  { code: "+691", label: "Micronesia (+691)" },
  { code: "+692", label: "Marshall Islands (+692)" },
  { code: "+850", label: "North Korea (+850)" },
  { code: "+852", label: "Hong Kong (+852)" },
  { code: "+853", label: "Macau (+853)" },
  { code: "+855", label: "Cambodia (+855)" },
  { code: "+856", label: "Laos (+856)" },
  { code: "+870", label: "Inmarsat (+870)" },
  { code: "+971", label: "United Arab Emirates (+971)" },
  { code: "+972", label: "Israel (+972)" },
  { code: "+973", label: "Bahrain (+973)" },
  { code: "+974", label: "Qatar (+974)" },
  { code: "+975", label: "Bhutan (+975)" },
  { code: "+976", label: "Mongolia (+976)" },
  { code: "+977", label: "Nepal (+977)" },
  { code: "+992", label: "Tajikistan (+992)" },
  { code: "+993", label: "Turkmenistan (+993)" },
  { code: "+994", label: "Azerbaijan (+994)" },
  { code: "+995", label: "Georgia (+995)" },
  { code: "+996", label: "Kyrgyzstan (+996)" },
  { code: "+997", label: "Kazakhstan (alt) (+997)" },
  { code: "+998", label: "Uzbekistan (+998)" },
];
