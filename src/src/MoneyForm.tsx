// v3
import { action, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Athlete from './Athlete';
import { useTeamStore } from './TeamStore';

type FormState = {
  name: string;
  age: number;
  salary: number;
};

const initialState: FormState = {
  name: '',
  age: 0,
  salary: 0,
};

let formState: FormState = observable({
  name: '',
  age: 0,
  salary: 0,
});

// eslint-disable-next-line mobx/missing-observer
function MoneyForm() {
  const { totalYearlyCost, addPlayer } = useTeamStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <>Total: {totalYearlyCost} Million</>
      <input
        type="text"
        placeholder="Player name..."
        style={{ height: '40px' }}
        value={formState.name}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Player age..."
        style={{ height: '40px' }}
        value={formState.age}
        onChange={action((e) => {
          formState.age = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary..."
        style={{ height: '40px' }}
        value={formState.salary}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = initialState;
        })}
      >
        Add Player
      </button>
    </div>
  );
}

export default observer(MoneyForm);

// v1
// import React, { useState } from 'react';

// function MoneyForm() {
//   const [total, setTotal] = useState<number>(0);
//   const [years, setYears] = useState(0);
//   const [salary, setSalary] = useState(0);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
//       <p>Total: {total}</p>
//       <input
//         type="number"
//         placeholder="Years..."
//         style={{ height: '40px' }}
//         onChange={(e) => setYears(Number(e.target.value))}
//       />
//       <input
//         type="number"
//         placeholder="Yearly salary..."
//         style={{ height: '40px' }}
//         onChange={(e) => setSalary(Number(e.target.value))}
//       />
//       <button type="button" onClick={() => setTotal(years * salary)}>
//         Calculate Total
//       </button>
//     </div>
//   );
// }

// export default MoneyForm;

// v2
// import { action, computed, observable, toJS } from 'mobx';
// import { observer } from 'mobx-react';
// import React from 'react';

// type FormState = {
//   years: number;
//   salary: number;
// };

// const formState: FormState = observable({
//   years: 0,
//   salary: 0,
// });

// // eslint-disable-next-line mobx/missing-observer
// function MoneyForm() {
//   const totalValue = computed(() => formState.salary * formState.years);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
//       <>Total: {toJS(totalValue)}</>
//       <input
//         type="number"
//         placeholder="Years..."
//         style={{ height: '40px' }}
//         onChange={action((e) => {
//           formState.years = Number(e.target.value);
//         })}
//       />
//       <input
//         type="number"
//         placeholder="Yearly salary..."
//         style={{ height: '40px' }}
//         onChange={action((e) => {
//           formState.salary = Number(e.target.value);
//         })}
//       />
//     </div>
//   );
// }

// export default observer(MoneyForm);
