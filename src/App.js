import React from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { PreExistingCard } from "./components/PreExistingCard";
import { DailyForcast } from "./components/DailyForcast";
import { BrowserRouter as Router, // Switch, // Route
} from "react-router-dom";


function App() {
  return (

        <Router>
            <div className="todo">
                <Header Heading="Your task list here:"/>
                <Search />
                <PreExistingCard />
                <DailyForcast />
{/*                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route exact path="/home" render = {() => {
                        return (
                            <>    
                                <Addtodo Addtodovalue={Addtodovalue} />
                                <Todo todoHeading={headingValue(itemList)} onDelete={onDelete} itemList={itemList} />
                            </>
                        )}}>
                        
                    </Route>
                </Switch>*/}
                <Footer />
            </div>
        </Router>
  );
}

export default App;
