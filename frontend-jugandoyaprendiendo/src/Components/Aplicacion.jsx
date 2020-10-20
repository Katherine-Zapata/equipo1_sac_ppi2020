import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsigniaPages from '../pages/InsigniaPages';
import InsigniaNueva from '../pages/InsigniaNueva';
import MenuPages from '../pages/MenuPages';
import Menu from '../pages/Menu';
import Layout from "./Layout";
import InicioPages from '../pages/InicioPages';
import Inicio from '../pages/Inicio';
import ExplicacionPages from '../pages/ExplicacionPages';
import Explicación from '../pages/Explicación';
import AjustesPages from '../pages/AjustesPages';
import Ajustes from '../pages/Ajustes';
import Bienvenida from '../pages/Bienvenida';
import BienvenidaPages from '../pages/BienvenidaPages';
import RegistroPages from '../pages/RegistroPages';
import Registro from '../pages/Registro';
import DespedidaPages from '../pages/DespedidaPages';
import Despedida from '../pages/Despedida';
import Preguntas1Pages from '../pages/Preguntas1Pages';
import Preguntas1 from '../pages/Preguntas1';
import Preguntas2Pages from '../pages/Preguntas2Pages';
import Preguntas2 from '../pages/Preguntas2';
import Preguntas3Pages from '../pages/Preguntas3Pages';
import Preguntas3 from '../pages/Preguntas3';
import Quiz1Pages from '../pages/Quiz1Pages';
import Quiz1 from  '../pages/Quiz1';
import Quiz2Pages from '../pages/Quiz2Pages';
import Quiz2 from '../pages/Quiz2';
import Quiz3Pages from '../pages/Quiz3Pages';
import Quiz3 from '../pages/Quiz3';
import LoginPages from '../pages/LoginPages';
import Login from '../pages/Login';
import AyudaPages from '../pages/AyudaPages';
import Ayuda from '../pages/Ayuda';
import Ajustes1Pages from '../pages/Ajustes1Pages';
import Ajustes1 from '../pages/Ajustes1';
import Ajustes2Pages from '../pages/Ajustes2Pges';
import Ajustes2 from '../pages/Ajustes2';
import DescargaPages from '../pages/DescargarPages';
import Descarga from '../pages/Descarga';
import Menu1Pages from '../pages/Menu1pages';
import Menu1 from '../pages/Menu1';
import ProfesoresPages from '../pages/ProfesoresPages';
import Profesores from '../pages/Profesores';
import EstudiantesPages from '../pages/EstudiantesPages';
import Estudiantes from '../pages/Estudiantes';

function Aplicacion() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={InsigniaPages} />
          <Route exact path='/insignia' component={InsigniaNueva} />
          <Route exact path='/menupages' component={MenuPages} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/iniciopages' component={InicioPages} />
          <Route exact path='/inicio' component={Inicio} />
          <Route exact path='/explicacionpages' component={ExplicacionPages} />
          <Route exact path='/explicación' component={Explicación} />
          <Route exact path='/ajustesPages' component={AjustesPages} />
          <Route exact path='/ajustes' component={Ajustes} />
          <Route exact path='/ajustes1Pages' component={Ajustes1Pages} />
          <Route exact path='/ajustes1' component={Ajustes1} />
          <Route exact path='/ajustes2Pages' component={Ajustes2Pages} />
          <Route exact path='/ajustes2' component={Ajustes2} />
          <Route exact path='/bienvenidapages' component={BienvenidaPages} />
          <Route exact path='/bienvenida' component={Bienvenida} />
          <Route exact path='/registropages' component={RegistroPages} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/despedidapages' component={DespedidaPages} />
          <Route exact path='/despedida' component={Despedida} />
          <Route exact path='/preguntas1pages' component={Preguntas1Pages} />
          <Route exact path='/preguntas1' component={Preguntas1} />
          <Route exact path='/preguntas2pages' component={Preguntas2Pages} />
          <Route exact path='/preguntas2' component={Preguntas2} />
          <Route exact path='/preguntas3pages' component={Preguntas3Pages} />
          <Route exact path='/preguntas3' component={Preguntas3} />
          <Route exact path='/quiz1pages' component={Quiz1Pages} />
          <Route exact path='/quiz1' component={Quiz1} />
          <Route exact path='/quiz2pages' component={Quiz2Pages} />
          <Route exact path='/quiz2' component={Quiz2} />
          <Route exact path='/quiz3pages' component={Quiz3Pages}/>
          <Route exact path='/quiz3' component={Quiz3} />
          <Route exact path='/loginpages' component={LoginPages}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/ayudapages' component={AyudaPages}/>
          <Route exact path='/ayuda' component={Ayuda} />
          <Route exact path='/descargapages' component={DescargaPages}/>
          <Route exact path='/descarga' component={Descarga} />
          <Route exact path='/menu1pages' component={Menu1Pages}/>
          <Route exact path='/menu1' component={Menu1} />
          <Route exact path='/profesorespages' component={ProfesoresPages}/>
          <Route exact path='/profesores' component={Profesores} />
          <Route exact path='/estudiantespages' component={EstudiantesPages}/>
          <Route exact path='/estudiantes' component={Estudiantes} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default Aplicacion;