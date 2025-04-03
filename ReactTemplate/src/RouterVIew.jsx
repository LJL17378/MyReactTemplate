import React from "react";
import { lazy, Suspense } from "react";
import { Route,Switch } from "wouter";

const Home = lazy(() => import("./pages/Home/Home"))
const About = lazy(() => import("./pages/About/About"))
const NotFound = lazy(() => import("./pages/NotFound/NotFound"))

export default function RouterView(){
    return(
        <div className="w-full h-screen bg-green-50">
        <Suspense>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </Suspense>
    </div>
    )
}