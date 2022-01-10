
import { FormProvider } from './components/store'

import Checkout from './components/Checkout';

import './App.css';

function App() {
    return (
        <div className="App">
            <FormProvider>
                <Checkout />
            </FormProvider>
        </div>
    )
}

export default App;
