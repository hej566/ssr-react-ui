import React from 'react';
// @ts-ignore

import { Routes, Route, Link } from 'react-router-dom';
import Layout from './examples/Layout';
import Buttons from './examples/Buttons';
import Accordions from "./examples/Accordions";
import Alerts from "./examples/Alerts";
import Badges from "./examples/Badges";
import Breadcrumbs from "./examples/Breadcrumbs";
import Carousels from "./examples/Carousels";
import Dropdowns from "./examples/Dropdowns";
import ListGroups from "./examples/ListGroups";
import Modals from "./examples/Modals";
import Navbars from "./examples/Navbars";
import Navs from "./examples/Navs";
import Offcanvases from "./examples/Offcanvases";
import Paginations from "./examples/Paginations";
import Placeholders from "./examples/Placeholders";
import Popovers from "./examples/Popovers";
import Progresses from "./examples/Progresses";
import Toasts from "./examples/Toasts";
import Tooltips from "./examples/Tooltips";
import Checkboxes from "./examples/Checkboxes";
import Radios from "./examples/Radios";
import Switches from "./examples/Switches";
import InputGroups from "./examples/InputGroups";
import FormControls from "./examples/FormControl";
import Ranges from "./examples/Ranges";
import Uploads from "./examples/Uploads";
import Home from "./examples/Home";
import ButtonsGroup from "./examples/ButtonsGroup";
// const Buttons = lazy(() => import('./examples/Buttons'));
// const Accordions = lazy(() => import('./examples/Accordions'));
// const Alerts = lazy(() => import('./examples/Alerts'));
// const Badges = lazy(() => import('./examples/Badges'));
// const Breadcrumbs = lazy(() => import('./examples/Breadcrumbs'));
// const Carousels = lazy(() => import('./examples/Carousels'));
// const Dropdowns = lazy(() => import('./examples/Dropdowns'));
// const ListGroups = lazy(() => import('./examples/ListGroups'));
// const Modals = lazy(() => import('./examples/Modals'));
// const Navs = lazy(() => import('./examples/Navs'));
// const Navbars = lazy(() => import('./examples/Navbars'));
// const Offcanvases = lazy(() => import('./examples/Offcanvases'));
// const Paginations = lazy(() => import('./examples/Paginations'));
// const Placeholders = lazy(() => import('./examples/Placeholders'));
// const Popovers = lazy(() => import('./examples/Popovers'));
// const Progresses = lazy(() => import('./examples/Progresses'));
// const Toasts = lazy(() => import('./examples/Toasts'));
// const Tooltips = lazy(() => import('./examples/Tooltips'));
// const Checkboxes = lazy(() => import('./examples/Checkboxes'));
// const Radios = lazy(() => import('./examples/Radios'));
// const Switches = lazy(() => import('./examples/Switches'));
// const InputGroups = lazy(() => import('./examples/InputGroups'));
// const FormControls = lazy(() => import('./examples/FormControl'));
// const Ranges = lazy(() => import('./examples/Ranges'));
// const Uploads = lazy(() => import('./examples/Uploads'));
// const Home = lazy(() => import('./examples/Home'));
// const ButtonsGroup = lazy(() => import('./examples/ButtonsGroup'));

function App() {
  return (
    <Layout link={Link}>
      {/*<Suspense fallback={<></>}>*/}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/buttons-group" element={<ButtonsGroup />} />
          <Route path="/accordions" element={<Accordions />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/breadcrumbs" element={<Breadcrumbs />} />
          <Route path="/carousels" element={<Carousels />} />
          <Route path="/dropdowns" element={<Dropdowns />} />
          <Route path="/list-group" element={<ListGroups />} />
          <Route path="/modals" element={<Modals />} />
          <Route path="/navs&tabs" element={<Navs />} />
          <Route path="/navbars" element={<Navbars />} />
          <Route path="/offcanvases" element={<Offcanvases />} />
          <Route path="/paginations" element={<Paginations />} />
          <Route path="/placeholders" element={<Placeholders />} />
          <Route path="/popovers" element={<Popovers />} />
          <Route path="/progresses" element={<Progresses />} />
          <Route path="/toasts" element={<Toasts />} />
          <Route path="/tooltips" element={ <Tooltips />} />
          <Route path="/checkboxes" element={<Checkboxes />} />
          <Route path="/radios" element={<Radios />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/input-groups" element={<InputGroups />} />
          <Route path="/form-control" element={<FormControls />} />
          <Route path="/range" element={<Ranges />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/breadcrumb" element={<Breadcrumbs />} />
        </Routes>
      {/*</Suspense>*/}
    </Layout>
  );
}

export default App;
