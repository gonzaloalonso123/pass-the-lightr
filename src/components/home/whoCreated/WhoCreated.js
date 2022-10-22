import React from "react";
import "./WhoCreated.css";
import Database from "../../../database/db-connection";

export default function WhoCreated() {
  const database = new Database();
  const createLighter = () => {
    Database.getLighters();
  };

  return (
    <div className="who-created-container">
      <div className="who-created">
        <h2>FAQ</h2>
        <label className="title">What is Pass the Lightr?</label>
        <p>
          Pass the Lightr is a project created by Daan Kuiper and Gonzalo
          Alonso. The both of us have always found it fascinating how you lose
          lighters and how you find a new one in your pocket after a night out
          for instance. This gave us the idea of tracking them and seeing how
          many kilometres a lighter might travel and what it comes along on its
          journey!
        </p>
        <label className="title">How does it work?</label>
        <p>
          When you find or receive a lighter, you enter the code found on the
          lighter on the main page. If you are the first person to log this
          lighter, you will be able to give it a nickname and a profile picture.
          After, you will be asked if you received it or you found it, where and
          when, and lastly you’ve got the option to leave a story behind your
          passing on experience, including a picture! A map will show up as
          well, showing where the lighter has travelled and the total distance
          it has travelled. Also you will be able to see how many people have
          logged this lighter.
        </p>
        <label className="title">Where do I get these amazing lighters?</label>
        <p>
          Currently, you can only find them in the field. Soon we would like to
          offer an option to buy the lighter stickers to help support us and
          give you the opportunity to spread a few of your own lighters, into
          the world!
        </p>
        <label className="title">Do I need to log in or something?</label>
        <p>
          No. Everything is handled by nicknames and no personal data is asked
          nor stored.
        </p>
        <label className="title">Can I find you on social media?</label>
        <p>
          Yes, on Instagram only for now. @passthelightr is where you can find
          us!
        </p>
        <label className="title">How do I contact you guys?</label>
        <p>Shoot an email! daan@passthelightr.com</p>
      </div>
    </div>
  );
}
