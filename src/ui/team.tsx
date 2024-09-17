import React from "react";
import linkedin from "../assets/linkedin.png";

function Team() {
  const cores = [
    {
      name: "Taylor Swift",
      role: "Singer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Shingini Lahiri",
      role: "Junior Developer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "#",
    },
  ];

  const heads = [
    {
      name: "Taylor Swift",
      role: "Singer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Shingini Lahiri",
      role: "Junior Developer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "#",
    },
  ];

  const coords = [
    {
      name: "Taylor Swift",
      role: "Singer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Shingini Lahiri",
      role: "Junior Developer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "#",
    },
    {
      name: "Taylor Swift",
      role: "Singer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Shingini Lahiri",
      role: "Junior Developer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "#",
    },
    {
      name: "Taylor Swift",
      role: "Singer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Shingini Lahiri",
      role: "Junior Developer",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
      linkedinUrl: "#",
    },
  ];

  function TeamSection({ team, title }: { team: string; title: string }) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-white pt-7">{title}</h1>
        <div className="flex justify-center">
          <ul className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
            {team.map((member) => (
              <li
  key={member.name}
  className="group w-64 h-80 relative perspective"
>
  <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
    <div className="absolute w-full h-full bg-slate-900 border border-[#060630] rounded-lg backface-hidden flex flex-col items-center justify-center p-6"
         style={{ backfaceVisibility: 'hidden' }}>
      <img
        src={member.imageUrl}
        className="w-40 h-40 mx-auto rounded-full"
        alt={member.name}
      />
      <h3 className="mt-4 font-semibold text-lg text-gray-100">
        {member.name}
      </h3>
      <p className="mt-2 text-gray-400">{member.role}</p>
    </div>

    <div className="absolute w-full h-full bg-gray-800 rounded-lg backface-hidden flex flex-col items-center justify-center p-6 rotate-y-180"
         style={{ backfaceVisibility: 'hidden' }}>
      <h3 className="mt-4 font-semibold text-lg text-gray-100">
        About {member.name}
      </h3>
      <p className="mt-2 text-gray-400">
        {member.name} is known for their role as a {member.role}.
        Click the link below to connect!
      </p>
      <a href={member.linkedinUrl} className="mt-4">
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-8 h-8 opacity-80 hover:opacity-100"
        />
      </a>
    </div>
  </div>
</li>

            ))}
          </ul>
        </div>
      </div>
    );
  }

  const renderCoords = () => (
    <>
      <h1 className="text-4xl font-bold text-white pt-7">Coordinators</h1>
      <div className="flex justify-center">
        <ul className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {coords.map((coord) => (
            <li
              key={coord.name}
              className="group w-64 h-80 relative perspective"
            >
              <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full bg-slate-900 rounded-lg backface-hidden flex flex-col items-center justify-center p-6">
                  <img
                    src={coord.imageUrl}
                    className="w-40 h-40 mx-auto rounded-full"
                    alt={coord.name}
                  />
                  <h3 className="mt-4 font-semibold text-lg text-gray-100">
                    {coord.name}
                  </h3>
                  <p className="mt-2 text-gray-400">{coord.role}</p>
                </div>

                <div className="absolute w-full h-full bg-gray-800 rounded-lg backface-hidden flex flex-col items-center justify-center p-6 rotate-y-180">
                  <h3 className="mt-4 font-semibold text-lg text-gray-100">
                    About {coord.name}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {coord.name} is known for their role as a {coord.role}.
                    Click the link below to connect!
                  </p>
                  <a href={coord.linkedinUrl} className="mt-4">
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="w-8 h-8 opacity-80 hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <div className="relative py-32 text-white bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl tracking-tight sm:text-8xl text-gray-100 pb-10">
            Meet our team
          </h3>
        </div>

        <TeamSection team={cores} title="Cores" />

        <TeamSection team={heads} title="Heads" />

        {renderCoords()}
      </div>
    </div>
  );
}

export default Team;





// import linkedin from "../assets/linkedin.png";


// // type coord = {
// //   name:string,
// //   role:string, 
// //   imageUrl:string,
// //   linkedinUrl:string
// // }
// function Team() {
//   const cores = [
//     {
//       name: "Taylor Swift",
//       role: "Singer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "https://www.linkedin.com/in/",
//     },
//     {
//       name: "Shingini Lahiri",
//       role: "Junior Developer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "#",
//     },
//   ];

//   const heads = [
//     {
//       name: "Taylor Swift",
//       role: "Singer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "https://www.linkedin.com/in/",
//     },
//     {
//       name: "Shingini Lahiri",
//       role: "Junior Developer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "#",
//     },
//   ];

//   const coords = [
//     {
//       name: "Taylor Swift",
//       role: "Singer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "https://www.linkedin.com/in/",
//     },
//     {
//       name: "Shingini Lahiri",
//       role: "Junior Developer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "#",
//     },
//     {
//       name: "Taylor Swift",
//       role: "Singer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "https://www.linkedin.com/in/",
//     },
//     {
//       name: "Shingini Lahiri",
//       role: "Junior Developer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "#",
//     },
//     {
//       name: "Taylor Swift",
//       role: "Singer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "https://www.linkedin.com/in/",
//     },
//     {
//       name: "Shingini Lahiri",
//       role: "Junior Developer",
//       imageUrl:
//         "https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/960x0.jpg",
//       linkedinUrl: "#",
//     },
//   ];


//   function TeamSection({ team, title }: { team: string; title: string }) {
//     return (
//       <div>
//         <h1 className="text-4xl font-bold text-white pt-7">{title}</h1>
//         <div className="flex justify-center">
//           <ul className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
//             {team.map((member) => (
//               <li
//                 key={member.name}
//                 className="group w-64 h-80 relative perspective rounded-lg "
//               >
//                 <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
//                   <div className="absolute w-full h-full bg-slate-900 border border-[#060630] rounded-lg backface-hidden flex flex-col items-center justify-center p-6">
//                     <img
//                       src={member.imageUrl}
//                       className="w-40 h-40 mx-auto rounded-full"
//                       alt={member.name}
//                     />
//                     <h3 className="mt-4 font-semibold text-lg text-gray-100">
//                       {member.name}
//                     </h3>
//                     <p className="mt-2 text-gray-400">{member.role}</p>
//                   </div>

//                   <div className="absolute w-full h-full bg-gray-800 rounded-lg backface-hidden flex flex-col items-center justify-center p-6 rotate-y-180">
//                     <h3 className="mt-4 font-semibold text-lg text-gray-100">
//                       About {member.name}
//                     </h3>
//                     <p className="mt-2 text-gray-400">
//                       {member.name} is known for their role as a {member.role}.
//                       Click the link below to connect!
//                     </p>
//                     <a href={member.linkedinUrl} className="mt-4">
//                       <img
//                         src={linkedin}
//                         alt="LinkedIn"
//                         className="w-8 h-8 opacity-80 hover:opacity-100"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   const renderCoords = () => (
//     <>
//       <h1 className="text-4xl font-bold text-white pt-7">Coordinators</h1>
//       <div className="flex justify-center">
//         <ul className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
//           {coords.map((coord) => (
//             <li
//               key={coord.name}
//               className="group w-64 h-80 relative perspective"
//             >
//               <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
//                 <div className="absolute w-full h-full bg-slate-900 rounded-lg backface-hidden flex flex-col items-center justify-center p-6">
//                   <img
//                     src={coord.imageUrl}
//                     className="w-40 h-40 mx-auto rounded-full"
//                     alt={coord.name}
//                   />
//                   <h3 className="mt-4 font-semibold text-lg text-gray-100">
//                     {coord.name}
//                   </h3>
//                   <p className="mt-2 text-gray-400">{coord.role}</p>
//                 </div>

//                 <div className="absolute w-full h-full bg-gray-800 rounded-lg backface-hidden flex flex-col items-center justify-center p-6 rotate-y-180">
//                   <h3 className="mt-4 font-semibold text-lg text-gray-100">
//                     About {coord.name}
//                   </h3>
//                   <p className="mt-2 text-gray-400">
//                     {coord.name} is known for their role as a {coord.role}.
//                     Click the link below to connect!
//                   </p>
//                   <a href={coord.linkedinUrl} className="mt-4">
//                     <img
//                       src={linkedin}
//                       alt="LinkedIn"
//                       className="w-8 h-8 opacity-80 hover:opacity-100"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
//   return (
//     <section id="team">
//     <div className="relative py-32 text-white bg-gradient-to-r from-black via-gray-900 to-black">
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
//         <div className="max-w-2xl mx-auto">
//           <h3 className="text-3xl tracking-tight sm:text-8xl text-gray-100 pb-10">
//             Meet our team
//           </h3>
//         </div>

//         <TeamSection team={cores} title="Cores" />

//         <TeamSection team={heads} title="Heads" />

//         {renderCoords()}
//       </div>
//     </div>
//     </section>
//   );
// }

// export default Team;
