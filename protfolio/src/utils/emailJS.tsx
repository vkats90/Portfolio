import emailjs from "@emailjs/browser";

const SERVICEID = "service_ut56vmi";
const TEMPLATEID = "template_10fl34t";
const PUBLICKEY = "b93puRb5Dm3NaiYqW";

const sendEmail = (formData: Record<string, unknown>) => {
  console.log(formData);
  emailjs.init({
    publicKey: PUBLICKEY,
    blockHeadless: true,
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });

  emailjs.send(SERVICEID, TEMPLATEID, formData).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
};

export { sendEmail };
