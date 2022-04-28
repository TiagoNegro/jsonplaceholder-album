import { Fragment, useState } from "react";
import { MainRoutes } from "./routes/MainRoutes";


const App = () => {

  return (
    <Fragment>
      <header className="bg-slate-400 p-5">
        <p className="text-zinc-700 text-3xl">Album JSONPlaceholder</p>
      </header>
      <main className="bg-slate-300">
        <MainRoutes />
      </main>
      <footer className="bg-slate-400 p-5 text-zinc-700 text-3sm text-center">
        &copy; devtnegro
      </footer>
    </Fragment>
  );
}
export default App;
