import lottieLogin from "../../assets/lottiesJson/LottieLogin.json";
import Lottie from "lottie-react";

const LoginAvatar = () => {
  return (
    <div className="LoginAvatar w-full flex items-center justify-center">
      <Lottie
        animationData={lottieLogin}
        loop={true}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default LoginAvatar;
