import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Start from './Start';
import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Start />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
