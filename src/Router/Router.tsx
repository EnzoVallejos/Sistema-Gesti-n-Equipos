import { createBrowserRouter } from "react-router-dom";
import { BrowserRoutes } from "./BrowserRouter";
import { UserProvider } from "../Context/useAuth";
import { Login } from "../Features/Authentication/login";
import Layout from "../Shared/Components/layouts";
import AuthorizedComponent from "./AuthenticateRoute";
import Home from "../Features/Home/Home";
import NewTeam from "../Features/Pcs/NewTeam";
import NewPc from "../Features/Pcs/Components/NewPc";
import NewMonitor from "../Features/Pcs/Components/NewMonitor";
import NewAire from "../Features/Pcs/Components/NewAire";
import ListButtons from "../Features/Lists.tsx/ListButtons";
import ListPcs from "../Features/Lists.tsx/Components/ListPcs";
import ListMonitores from "../Features/Lists.tsx/Components/ListMonitores";
import ListAires from "../Features/Lists.tsx/Components/ListAires";
import NewImpresora from "../Features/Pcs/Components/NewImpresora";
import NewAudiovisual from "../Features/Pcs/Components/NewAudiovisual";
import NewComponent from "../Features/Pcs/Components/NewComponent";
import ListAudioVisual from "../Features/Lists.tsx/Components/ListAudioVisual";
import ListComponent from "../Features/Lists.tsx/Components/ListComponent";
import ListImpresora from "../Features/Lists.tsx/Components/ListImpresora";
import UploadFiles from "../Features/Files/UploadFiles";
const Router = createBrowserRouter([
    {
      element: (
        <UserProvider>
          <Layout />
        </UserProvider>
      ),
      children: [
        {
          path: BrowserRoutes.LOGIN,
          element: <Login />
        },
        {
          path: BrowserRoutes.HOME,
          element: (
            <AuthorizedComponent>
              <Home />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_TEAM,
          element: (
            <AuthorizedComponent>
              <NewTeam />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_PC,
          element: (
            <AuthorizedComponent>
              <NewPc />
            </AuthorizedComponent>
          )
        }, 
        {
          path: BrowserRoutes.NEW_MONITOR,
          element: (
            <AuthorizedComponent>
              <NewMonitor />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_AIRE,
          element: (
            <AuthorizedComponent>
              <NewAire />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_GENERAL,
          element: (
            <AuthorizedComponent>
              <ListButtons />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_PC,
          element: (
            <AuthorizedComponent>
              <ListPcs />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_MONITOR,
          element: (
            <AuthorizedComponent>
              <ListMonitores />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_AIRE,
          element: (
            <AuthorizedComponent>
              <ListAires />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_IMPRESORA,
          element: (
            <AuthorizedComponent>
              <NewImpresora />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_AUDIVISUAL,
          element: (
            <AuthorizedComponent>
              <NewAudiovisual />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.NEW_COMPONENTE,
          element: (
            <AuthorizedComponent>
              <NewComponent />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_AUDIOVISUAL,
          element: (
            <AuthorizedComponent>
              <ListAudioVisual />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_COMPONENTES,
          element: (
            <AuthorizedComponent>
              <ListComponent />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.LIST_IMPRESORA,
          element: (
            <AuthorizedComponent>
              <ListImpresora />
            </AuthorizedComponent>
          )
        },
        {
          path: BrowserRoutes.UPLOAD_FILES,
          element: (
            <AuthorizedComponent>
              <UploadFiles />
            </AuthorizedComponent>
          )
        }
      ]
    }
]);

export default Router;