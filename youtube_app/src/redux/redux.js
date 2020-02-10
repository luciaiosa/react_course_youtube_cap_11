// People dropping off a form ( Action creator)
const createPolicy = (name, amount) => {
  return {
    // action (a form used to create a pOLICY)
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

// Action creator
const deletePolicy = name => {
  return {
    // action (a form used to DELETE A Policy)
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

//Action creator
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    // action (a form used to create a Claim)
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

// REDUCERS (Departments) = take some data, an action, and modify and return
// that existing data based upon the contents of an action

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // WE CARE ABOUT THIS ACTION (form)
    return [...oldListOfClaims, action.payload];
  }
  // WE DON'T CARE ABOUT THIS ACTION (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }
  return bagOfMoney;
};

const policies = (oldListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldListOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    // Use filter method (create a new array with the filtered values)
    return oldListOfPolicies.filter(name => name !== action.payload.name);
  }
  return oldListOfPolicies;
};

// NEVER CHANGE THE ORIGINAL ARRAY AND ALWAYS RETURN SOMETHING !!!!

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies
});

const store = createStore(ourDepartments);

// const action = createPolicy("Alex", 20);
// store.dispatch(action); Esto es igual que esto:

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Alejandro", 40));

store.dispatch(createClaim("Jim", 50));
store.dispatch(createClaim("Alejandro", 10));

store.dispatch(deletePolicy("Jim"));
store.dispatch(deletePolicy("Alex"));

console.log(store.getState);
