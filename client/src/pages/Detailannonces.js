import React from 'react';
import Getapi from '../services/Getapi';
import { useParams } from 'react-router-dom';
import Contact from './Contact';
const Detailannonces = () => {
    const params = useParams();
    console.log("paramss", params)
    const baseUrl = `http://localhost:3001/getdtannonces/${params.id}`;

    console.log("paramss", params);
    console.log("baseUrl", baseUrl);
    const { data } = Getapi(baseUrl);


    return (
        <div>
            <div id="main" className="main page-detail">
                <div className="main__wrapper">
                    <div id="" className=" slider-inner_breadcrumb breadcrumb ">
                        <div className="breadcrumb__wrapper">
                            <ol className="breadcrumb__items">
                                <li className="breadcrumb__item"><a href="/" className="breadcrumb__link">Accueil</a></li>
                                <li className="breadcrumb__item"><a href="/vente/1" className="breadcrumb__link">Vente</a></li>
                                <li className="breadcrumb__item--active">{data.title}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="links-group back-link js-animate" data-animation="bottomup">
                        <div className="links-group__wrapper">
                            <button onclick="history.back();" className="button">
                                <svg className="button-drawing__drawing" viewBox="0 0 150 150"><path d="M39.25,80.42l60.67,60.67a8.18,8.18,0,0,0,5.42,2.24,7.66,7.66,0,0,0,5.41-13.07L55.49,75l55.26-55.26a7.66,7.66,0,0,0,0-10.83,7.67,7.67,0,0,0-10.83,0L39.25,69.58a7.68,7.68,0,0,0,0,10.84Z"></path></svg>
                                Retour
                            </button>
                        </div>
                    </div>
                    <div className="page-detail__content wrapper page-detail-3">
                        <div className="detail-3">
                            <div className="detail-3__wrapper">
                                <div className="detail-3__jumbotron">
                                    <div className="detail-3__slide slider-img">
                                        <img src="/img/no_bien.jpg" />
                                    </div>
                                    <div className="detail-3__main-info main-info">
                                        <div className="main-info__wrapper">
                                            <div className="detail-3__reference" data-animation="bottomup">
                                                Réf : <span className="detail-3__reference-number">testcache</span>
                                            </div>
                                            <div className="main-info__content-wrapper">
                                                <header className="main-info__title title" data-animation="bottomup">
                                                    <div className="title__content"><span>{data.title}</span></div>
                                                </header>
                                                <div className="main-info__aligner">
                                                    <div className="main-info__options" data-animation="bottomup">
                                                        <div className="options">
                                                            <div className="option ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="option__drawing" viewBox="0 0 69.4 69.4">
                                                                    <title>Nombre de pièces</title>    <path d="M68.4,0H1C0.4,0,0,0.4,0,1v67.4c0,0.6,0.4,1,1,1h67.4c0.6,0,1-0.4,1-1V1C69.4,0.4,69,0,68.4,0z M67.4,36.7H61
	c-0.6,0-1,0.4-1,1s0.4,1,1,1h6.4v28.8H23.9v-7.7c0-0.6-0.4-1-1-1s-1,0.4-1,1v7.7H2V2h19.9v47c0,0.6,0.4,1,1,1s1-0.4,1-1V38.7h27
	c0.6,0,1-0.4,1-1s-0.4-1-1-1h-27V2h43.6L67.4,36.7z"></path>
                                                                </svg>

                                                                <span className="option__number">3 </span>
                                                            </div>
                                                            <div className="option ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="option__drawing" viewBox="0 0 99.6 76.5">
                                                                    <title>Nombre de chambres</title>    <path d="M93.3,27.7H83.1V5.3c0-2.9-2.4-5.3-5.3-5.3H21.7c-2.9,0-5.3,2.4-5.3,5.3v22.4H6.2c-3.4,0-6.2,2.8-6.2,6.2v41.3
	c-0.1,0.7,0.4,1.3,1.1,1.3c0.7,0.1,1.3-0.4,1.3-1.1c0-0.1,0-0.1,0-0.2V58.4h94.7v16.8c-0.1,0.7,0.4,1.3,1.1,1.3
	c0.7,0.1,1.3-0.4,1.3-1.1c0-0.1,0-0.1,0-0.2V33.9C99.6,30.5,96.8,27.7,93.3,27.7z M18.9,5.3c0-1.6,1.3-2.8,2.8-2.8l0,0h56.2
	c1.6,0,2.8,1.3,2.8,2.8v22.4h-4.2v-6.3c0-3.4-2.8-6.2-6.2-6.2H58.1c-3.4,0-6.2,2.8-6.2,6.2v6.3h-4.2v-6.3c0-3.4-2.8-6.2-6.2-6.2
	H29.3c-3.4,0-6.2,2.8-6.2,6.2v6.3h-4.2V5.3z M54.3,27.7v-6.3c0-2.1,1.7-3.8,3.8-3.8l0,0h12.2c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0v6.3
	H54.3z M25.5,27.7v-6.3c0-2.1,1.7-3.8,3.8-3.8h12.2c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0v6.3H25.5z M6.2,30.1h87.1
	c2.1,0,3.8,1.7,3.8,3.8l0,0v14.4H2.4V33.9C2.4,31.8,4.1,30.1,6.2,30.1C6.2,30.1,6.2,30.1,6.2,30.1z M2.4,56v-5.3h94.7V56H2.4z"></path>
                                                                </svg>

                                                                <span className="option__number">2 </span>
                                                            </div>
                                                            <div className="option option--alt">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="option__drawing" viewBox="0 0 82.3 80.9">
                                                                    <title>TRAD_MELTEM_Superficieenm²</title>    <path d="M73,69.8c-0.4-0.3-1-0.2-1.3,0.3c-0.1,0.2-0.2,0.3-0.2,0.5v3.7H24.2v-3.7c0-0.5-0.4-0.9-0.9-1c-0.2,0-0.4,0-0.5,0.2
	l-7.5,4.7c-0.3,0.2-0.5,0.5-0.5,0.8c0,0.3,0.2,0.6,0.4,0.8l7.5,4.7c0.3,0.2,0.7,0.2,1,0c0.3-0.2,0.5-0.5,0.5-0.8v-3.7h47.3V80
	c0,0.6,0.5,1,1.1,0.9c0.1,0,0.3,0,0.4-0.1l7.5-4.7c0.3-0.2,0.4-0.5,0.4-0.8c0-0.3-0.2-0.6-0.4-0.8L73,69.8z"></path>
                                                                    <path d="M10.2,9.4c0.3,0,0.7-0.2,0.8-0.5c0.2-0.3,0.2-0.7,0-1L6.4,0.5C6.2,0.2,5.9,0,5.6,0C5.2,0,4.9,0.2,4.8,0.5L0.1,7.9
	C-0.1,8.4,0.1,9,0.5,9.3c0.1,0.1,0.2,0.1,0.4,0.1h3.7v47.3H0.9c-0.5,0.1-0.9,0.6-0.9,1.1c0,0.1,0,0.2,0.1,0.3l4.7,7.5
	c0.3,0.4,0.9,0.6,1.3,0.3c0.1-0.1,0.2-0.2,0.3-0.3l4.7-7.5c0.2-0.3,0.2-0.7,0-1c-0.2-0.3-0.5-0.5-0.8-0.5H6.5V9.4H10.2z"></path>
                                                                    <path d="M81.4,27.6H56.3V1.1c0-0.5-0.4-0.9-0.9-0.9c0,0,0,0,0,0H16.7c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0V65c0,0.5,0.4,0.9,0.9,0.9
	h0h64.7c0.5,0,0.9-0.4,0.9-0.9c0,0,0,0,0,0V28.5C82.3,28,81.9,27.6,81.4,27.6z M17.6,2h17.5v9.8H17.6V2z M28.8,64.1H17.6V45.2h11.2
	V64.1z M54.4,64.1H30.6V45.2h23.9V64.1z M54.4,28.2c0,0.1,0,0.2,0,0.3v15H17.6V13.6h36.9L54.4,28.2z M54.4,11.8H36.9V2h17.6
	L54.4,11.8z M80.4,64.1H56.2V29.4h24.3L80.4,64.1z"></path>
                                                                </svg>

                                                                <span className="option__number">60 m²</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-info__price" data-animation="bottomup">
                                                        <span>{data.prix} €</span>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-3__wrapper-inner wrapper">
                                    <div className="detail-3__description">
                                        <div className="detail-3__title title">
                                            <h1 className="title__content">
                                                <span>{data.title}</span>
                                                <span>{data.ville} ({data.cp})</span>
                                            </h1>
                                        </div>
                                        <div className="detail-3__container-text">
                                            <div className="detail-3__text">
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-3__wrapper-inner wrapper">


                                    <div className="detail-3__datas datas">
                                        <div className="datas__wrapper">
                                            <div className="tabs-v2">

                                                <div className="js-tabs detail-tabs" data-existing-hx="h2" data-tabs-prefix-className="detail" id="tabsnsmc5mssqo">
                                                    <ul className="js-tablist detail-tabs__list" role="tablist" id="tabs__listnsmc5mssqo">

                                                        <li className="js-tablist__item detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-1">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_energy" role="tab" aria-controls="tabid_energy" tabindex="0" aria-selected="true">
                                                                DPE<span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                        <li className="js-tablist__item detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-2">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_infos" role="tab" aria-controls="tabid_infos" tabindex="-1" aria-selected="false">
                                                                Général<span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                        <li className="js-tablist__item detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-3">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_details" role="tab" aria-controls="tabid_details" tabindex="-1" aria-selected="false">
                                                                Détails +<span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                        <li className="js-tablist__item detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-4">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_copro" role="tab" aria-controls="tabid_copro" tabindex="-1" aria-selected="false">
                                                                Copropriété<span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                        <li className="js-tablist__item detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-5">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_infosfi" role="tab" aria-controls="tabid_infosfi" tabindex="-1" aria-selected="false">
                                                                Financier<span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                        <li className="js-tablist__item carte_bien_ici detail-tabs__item" role="presentation" id="tabs__itemnsmc5mssqo-6">
                                                            <a className="js-tablist__link detail-tabs__link" id="label_tabid_mapbienici" role="tab" aria-controls="tabid_mapbienici" tabindex="-1" aria-selected="false">
                                                                Carte bien ici1
                                                                <span className="detail-tabs__link-drawing"></span>
                                                            </a>
                                                        </li>
                                                    </ul>


                                                    <div id="tabid_energy" className="js-tabcontent detail-tabs__content" role="tabpanel" aria-labelledby="label_tabid_energy">
                                                        <div className="datas__energy energy">
                                                            <div className="energy__drawing">
                                                                <img src="//meltemdemo.la-boite-immo.com/admin/dpe.php?lang=fr&amp;idann=515&amp;size=A4" alt="DPE" />
                                                                <img src="//meltemdemo.la-boite-immo.com/admin/dpe.php?type=GES&amp;lang=fr&amp;idann=515&amp;size=A4" alt="GES" />
                                                            </div>
                                                            <div className="energy__label">Montant estimé des dépenses annuelles d'énergie de ce logement pour un usage standard est compris entre 200 € et 230 € . 2021 étant l'année de référence des prix de l'énergie utilisés pour établir cette estimation.<br />Logement à consommation énergétique excessive</div>
                                                        </div>
                                                    </div>


                                                    <div id="tabid_infos" className="js-tabcontent detail-tabs__content" role="tabpanel" aria-labelledby="label_tabid_infos" aria-hidden="true">
                                                        <div className="table-aria table-aria--v3" role="table" aria-label="Informations générales du bien" aria-describedby="Superficie et détail du nombre de pièces" aria-rowcount="5">
                                                            <div className="table-aria__th table-aria__th--hidden" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Caractérisque</span>
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Valeurs</span>
                                                                </div>
                                                            </div>

                                                            <div className="table-aria__group" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Code postal</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">83400</span>
                                                                </div>
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Surface habitable (m²)</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">60 m²</span>
                                                                </div>
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Nombre de chambre(s)</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">2</span>
                                                                </div>
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Nombre de pièces</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">3</span>
                                                                </div>
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Nombre de niveaux</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">1</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div id="tabid_details" className="js-tabcontent detail-tabs__content" role="tabpanel" aria-labelledby="label_tabid_details" aria-hidden="true">
                                                        <div className="table-aria table-aria--v3" role="table" aria-label="Informations complémentaires" aria-describedby="Informations complémentaires du bien" aria-rowcount="0">
                                                            <div className="table-aria__th table-aria__th--hidden" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Caractérisque</span>
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Valeurs</span>
                                                                </div>
                                                            </div>

                                                            <div className="table-aria__group" role="rowgroup">
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div id="tabid_copro" className="js-tabcontent detail-tabs__content" aria-hidden="true" role="tabpanel" aria-labelledby="label_tabid_copro">
                                                        <div className="table-aria table-aria--v3" role="table" aria-label="" aria-describedby="" aria-rowcount="0">
                                                            <div className="table-aria__th table-aria__th--hidden" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Caractérisque</span>
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Valeurs</span>
                                                                </div>
                                                            </div>

                                                            <div className="table-aria__group" role="rowgroup">
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div id="tabid_infosfi" className="js-tabcontent detail-tabs__content" aria-hidden="true" role="tabpanel" aria-labelledby="label_tabid_infosfi">
                                                        <div className="table-aria table-aria--v3" role="table" aria-label="Informations financières" aria-describedby="Informations financières du bien" aria-rowcount="1">
                                                            <div className="table-aria__th table-aria__th--hidden" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Caractérisque</span>
                                                                    <span className="table-aria__td" role="columnheader" aria-sort="none">Valeurs</span>
                                                                </div>
                                                            </div>

                                                            <div className="table-aria__group" role="rowgroup">
                                                                <div className="table-aria__tr" role="row">
                                                                    <span className="table-aria__td table-aria__td--title " role="cell">Prix de vente honoraires TTC inclus</span>
                                                                    <span className="table-aria__td table-aria__td--value" role="cell">205 000 €</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div id="tabid_mapbienici" className="js-tabcontent detail-tabs__content" aria-hidden="true" role="tabpanel" aria-labelledby="label_tabid_mapbienici">
                                                        <div className="detail-3__map">
                                                            <div className="mapbienici Array" data-zoom="16" data-marker="1" data-circle="" data-circle-rayon="200">
                                                            </div>
                                                            <div id="map"></div>
                                                        </div>

                                                        <div className="map-api" data-lat="43.095313654172" data-lng="6.1345095829902">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Detailannonces;