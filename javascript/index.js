// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks

getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction("mashedPotatoes", 4, (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  getInstruction(
                    6,
                    () => {},
                    (err) => console.log(err)
                  );
                });
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

getInstruction();

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction(6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction(7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  });

obtainInstruction();

// Iteration 3 using async/await
const makeBrocAsync = async () => {
  try {
    const makeBrocPromise0 = await obtainInstruction("broccoli", 0);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise0}</li>`;
    const makeBrocPromise1 = await obtainInstruction("broccoli", 1);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise1}</li>`;
    const makeBrocPromise2 = await obtainInstruction("broccoli", 2);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise2}</li>`;
    const makeBrocPromise3 = await obtainInstruction("broccoli", 3);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise3}</li>`;
    const makeBrocPromise4 = await obtainInstruction("broccoli", 4);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise4}</li>`;
    const makeBrocPromise5 = await obtainInstruction("broccoli", 5);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise5}</li>`;
    const makeBrocPromise6 = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${makeBrocPromise6}</li>`;
  } catch (error) {
    console.log(error);
  }
  const finalMessage3 = (document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`);

  console.log(finalMessage3);
};
makeBrocAsync();

// Bonus 2 - Promise all
const sproutsInOrder = brusselsSprouts.map((_, sproutsIndex) => {
  for (let i = 0; i < brusselsSprouts.length; i += 1) {
    return obtainInstruction(sproutsIndex[i]);
  }
});

Promise.all(sproutsInOrder)
  .then((values) => {
    console.log(values);
  })
  .catch((error) => console.log(error));