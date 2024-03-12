import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomId } = useParams();

  const myMetting = async (element) => {
    const appID = 1528088084;
    const serverSecrete = "3ca01fb0a92087436a423b74926e72b3";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecrete,
      roomId,
      Date.now().toString(),
      "Mahesh Bhojane"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
        container : element,
        sharedLinks : [
            {
                name: "Copy Link",
                url : `http://localhost:3000/room/${roomId}`
            }
        ],
        scenario : {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton : true,
    })
  };
  return (
    <>
    <div className="container">
      <div ref={myMetting} />
      </div>
    </>
  );
}

export default Room;
