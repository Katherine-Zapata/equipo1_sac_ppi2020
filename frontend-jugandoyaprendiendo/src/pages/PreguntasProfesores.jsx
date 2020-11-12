import React from 'react';

class PreguntasProfesores extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="container">
                    <div class="list-group">
                        <div class="p-3 mb-2 bg-white text-dark ">
                            <h5 class="mb-1">Insertar Evaluaciones</h5>
                            <p class="mb-1">Aquí podras agregar preguntas a las respectivas Evaluaciones: Historia, Herramientas y Exponentes tecnológicos.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div class="p-3 mb-2 bg-white text-dark card border-primary">
                            <h5 class="mb-1 text-primary text-center">Historia</h5>
                            <div className="container">
                                <form class="was-validated">
                                    <br />
                                    <div class="mb-3">
                                        <label for="validationTextarea">Agregar pregunta</label>
                                        <textarea class="form-control is-invalid" id="" placeholder="" required></textarea>
                                    </div>
                                    <label for="validationTextarea">Respuesta  correcta</label>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
                                        <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                        <br />
                                        <br />
                                        <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                        <br />
                                        <br />
                                        <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                    </div>
                                    <center><button class="btn btn-primary border-0" type="submit">Subir</button></center>
                                </form>
                                <br />
                                <br />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="p-3 mb-2 bg-white text-dark card border-danger">
                            <h5 class="mb-1 text-danger text-center">Herramientas</h5>
                            <div className="container">
                                <form class="was-validated">
                                    <br></br>
                                    <div class="mb-3">
                                        <label for="validationTextarea">Agregar pregunta</label>
                                        <textarea class="form-control is-invalid" id="validationTextarea2" placeholder="" required></textarea>
                                    </div>
                                    <label for="validationTextarea">Respuesta  correcta</label>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customControlValidation2" required />
                                        <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea2" placeholder="" required></textarea>
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <label class="custom-control-label" for="customControlValidation2">
                                            <textarea class="form-control is-invalid " id="validationTextarea2" placeholder="" required></textarea>
                                        </label>
                                    </div>
                                    <button class="btn btn-primary border-0" type="submit">Subir</button>
                                </form>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="p-3 mb-2 bg-white text-dark card border-success">
                            <h5 class="mb-1 text-center text-success">Exponentes</h5>
                            <div className="container">
                                <form class="was-validated">
                                    <br></br>
                                    <div class="mb-3">
                                        <label for="validationTextarea">Agregar pregunta</label>
                                        <textarea class="form-control is-invalid" id="validationTextarea3" placeholder="" required></textarea>
                                    </div>
                                    <label for="validationTextarea">Respuesta  correcta</label>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customControlValidation3" required />
                                        <label class="custom-control-label" for="customControlValidation3">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <label class="custom-control-label" for="customControlValidation3">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <label class="custom-control-label" for="customControlValidation1">
                                            <textarea class="form-control is-invalid " id="validationTextarea" placeholder="" required></textarea>
                                        </label>
                                    </div>
                                    <button class="btn btn-primary border-0" type="submit">Subir</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default PreguntasProfesores;