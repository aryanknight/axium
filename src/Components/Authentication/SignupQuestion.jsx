import React from 'react';

export default function Username({formData, setFormData}) {
    return (
        <>
          <div className="signup-ques">
            Your name deserves a VIP pass to our awesome services!
          </div>
          <div className="signup-ans">
            <input
              type="text"
              placeholder="eg: John Doe"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="signup-input"
            />
          </div>
        </>
      );
}

export function Password({formData, setFormData}) {
    return (
        <>
          <div className="signup-ques">
          Don't let hackers break into your secret stash! Create a password that even James Bond would envy!"
          </div>
          <div className="signup-ans">
            <input
              type="text"
              placeholder="eg: don’t tell anyone"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="signup-input"
            />
          </div>
        </>
      );
  }

  export function Email({formData, setFormData}) {
    return (
        <>
          <div className="signup-ques">
          Register your email because pigeons can't deliver our updates... yet!
          </div>
          <div className="signup-ans">
            <input
              type="text"
              placeholder="eg: johndoe@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="signup-input"
            />
          </div>
        </>
      );
  }

  export function Phone({formData, setFormData}) {
    return (
        <>
          <div className="signup-ques">
          Give us your digits, and we promise not to prank call... too often!
          </div>
          <div className="signup-ans">
            <input
              type="text"
              placeholder="eg: 0213546987"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="signup-input"
            />
          </div>
        </>
      );
  }