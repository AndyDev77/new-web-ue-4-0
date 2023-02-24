<?php

@include 'config.php';

session_start();



if (!isset($_SESSION['user_name'])) {
    header('location:login_form.php');
}

$acquis = 100;
$cours = 70;
$compliquer = 40;
$aide = 20;
$bar = "bar";
$apprenti = "Apprentissage";
$comp = "Compétences intrapersonnelles";
$ref =  "Réfléxion et imagination";
$com =  "Communication";
$comp2 = "Compétences interpersonnelles";
$lead =  "Leadership";



// $image = "https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Apprentissage','Compétences intrapersonnelles','Réfléxion et imagination','Communication','Compétences interpersonnelles','Leadership'],datasets:[{data:[$resultA,$resultIntra,$resultR,$moyenneC,$moyenneInter,$moyenneL],backgroundColor:['rgb(252, 66, 123)','rgb(52, 152, 219)','rgb(155, 89, 182)','rgb(254, 202, 87)','rgb(240, 147, 43)','rgb(106, 176, 76)'],color:['rgb(236, 240, 241)']}]},options:{plugins:{doughnutlabel:{labels:[{text:' soft-skills',font:{size:13}}]}}}}";

// Calcul de la moyenne des softs skills

if (isset($_POST['apprentissage'])) {
    $moyenneA = array_sum($_POST['apprentissage']) / count($_POST['apprentissage']);
    $resultA = (int)$moyenneA;
    //var_dump($_POST['apprentissage']);

}

if (isset($_POST['intrapersonnelles'])) {
    $moyenneIntra = array_sum($_POST['intrapersonnelles']) / count($_POST['intrapersonnelles']);
    $resultIntra = (int)$moyenneIntra;
    //var_dump($resultIntra);
    //var_dump($_POST['intrapersonnelles']);

}

if (isset($_POST['reflexion'])) {
    $moyenneR = array_sum($_POST['reflexion']) / count($_POST['reflexion']);
    $resultR = (int)$moyenneR;
    //var_dump($_POST['reflexion']);
}


if (isset($_POST['communication'])) {
    $moyenneC = array_sum($_POST['communication']) / count($_POST['communication']);
    $resultC = (int)$moyenneC;
    //var_dump($_POST['communication']);

}

if (isset($_POST['interpersonnelles'])) {
    $moyenneInter = array_sum($_POST['interpersonnelles']) / count($_POST['interpersonnelles']);
    $resultInter = (int)$moyenneInter;
    //  $resultInter = (int)$moyenneInter . " %";
    // var_dump($_POST['interpersonnelles']);


}

if (isset($_POST['leadership'])) {
    $moyenneL = array_sum($_POST['leadership']) / count($_POST['leadership']);
    $resultL = (int)$moyenneL;
    //var_dump($_POST['leadership'] );
}

if (isset($_POST['valider-form'])) {
    $name_user = $_SESSION['user_name'];

    $select = " SELECT * FROM roue";

    $result = mysqli_query($conn, $select);

    $insert = "INSERT INTO roue(name_user, apprentissage, competenceIntra, reflexion, communication, competenceInter,leadership,id) VALUES('$name_user','$resultA',' $resultIntra','$resultR','$resultC',' $resultInter','$resultL',3)";
    mysqli_query($conn, $insert);
    header('location:roue.php');

    // Apprentissage

    $volonte = $_POST['apprentissage'][0];
    $apprendre = $_POST['apprentissage'][1];
    $evaluation = $_POST['apprentissage'][2];
    $controle = $_POST['apprentissage'][3];
    $autonomie = $_POST['apprentissage'][4];
    $esprit = $_POST['apprentissage'][5];
    $curiosite = $_POST['apprentissage'][6];
    $methodologie = $_POST['apprentissage'][7];

    $selectApp = "SELECT * FROM apprentissage ";
    $resultApp = mysqli_query($conn, $selectApp);

    $insertApp = "INSERT INTO apprentissage(name_user, Volonte, Apprendre, evaluation, Controle, Autonomie, Esprit, Curiosite, Methodologie, id) VALUES('$name_user','$volonte',' $apprendre ','$evaluation','$controle',' $autonomie','$esprit','$curiosite','$methodologie',3)";

    mysqli_query($conn, $insertApp);
    header('location:roue.php');

    // Compétences intrapersonnelles

    $positive = $_POST['intrapersonnelles'][0];
    $ethique = $_POST['intrapersonnelles'][1];
    $temps = $_POST['intrapersonnelles'][2];
    $pression = $_POST['intrapersonnelles'][3];
    $stress = $_POST['intrapersonnelles'][4];
    $presence = $_POST['intrapersonnelles'][5];
    $motivation = $_POST['intrapersonnelles'][6];
    $faire_confiance = $_POST['intrapersonnelles'][7];
    $confiance_soi = $_POST['intrapersonnelles'][8];
    $resilience = $_POST['intrapersonnelles'][9];


    $selectIntra = "SELECT * FROM intrapersonnelles";
    $resultIntra = mysqli_query($conn, $selectIntra);

    $insertIntra = "INSERT INTO intrapersonnelles(name_user, positive, ethique, temps, pression, stress, presence, motivation, faire_confiance,confiance_soi, resilience, id) VALUES('$name_user',' $positive',' $ethique','$temps','$pression','$stress','$presence','$motivation','$faire_confiance','$confiance_soi','$resilience',3)";

    mysqli_query($conn, $insertIntra);
    header('location:roue.php');

    // Réflexion et Imagination

    $resolution = $_POST['reflexion'][0];
    $analytique = $_POST['reflexion'][1];
    $critique = $_POST['reflexion'][2];
    $creativite = $_POST['reflexion'][3];
    $ouverture = $_POST['reflexion'][4];
    $intuition = $_POST['reflexion'][5];


    $selectReflexion = "SELECT * FROM reflexion";
    $resultReflexion = mysqli_query($conn, $selectReflexion);

    $insertReflexion = "INSERT INTO reflexion(resolution, analytique, critique, creativite, ouverture, intuition, name_user, id) VALUES('$resolution','$analytique','  $critique ','$creativite',' $ouverture',' $intuition','$name_user',3)";

    mysqli_query($conn, $insertReflexion);
    header('location:roue.php');


    // Communication

    $orale = $_POST['communication'][0];
    $ecrite = $_POST['communication'][1];
    $nonverbale = $_POST['communication'][2];
    $active = $_POST['communication'][3];


    $selectComm = "SELECT * FROM communication";
    $resultComm = mysqli_query($conn, $selectComm);

    $insertComm = "INSERT INTO communication(orale, ecrite, nonverbale, active, name_user, id) VALUES('$orale','$ecrite',' $nonverbale ','$active','$name_user',3)";

    mysqli_query($conn, $insertComm);
    header('location:roue.php');

    // Compétences interpersonnelles

    $travailequipe = $_POST['interpersonnelles'][0];
    $collectif = $_POST['interpersonnelles'][1];
    $coordination = $_POST['interpersonnelles'][2];
    $conflit = $_POST['interpersonnelles'][3];
    $fiabilite = $_POST['interpersonnelles'][4];
    $flexibilite = $_POST['interpersonnelles'][5];
    $respect = $_POST['interpersonnelles'][6];
    $assertivite = $_POST['interpersonnelles'][7];
    $feedback = $_POST['interpersonnelles'][8];
    $politesse = $_POST['interpersonnelles'][9];


    $selectInter = "SELECT * FROM interpersonnelles";
    $resultInter = mysqli_query($conn, $selectInter);

    $insertInter = "INSERT INTO interpersonnelles(travailequipe, collectif, coordination, conflit, fiabilite, flexibilite, respect, assertivite, feedback,politesse, name_user, id) VALUES('$travailequipe',' $collectif',' $coordination','$conflit','$fiabilite','$flexibilite','$respect','$assertivite','$feedback','$politesse','$name_user',3)";

    mysqli_query($conn, $insertInter);
    header('location:roue.php');


    // Leadership

    $responsabilite = $_POST['leadership'][0];
    $incertitude = $_POST['leadership'][1];
    $vision = $_POST['leadership'][2];
    $strategique = $_POST['leadership'][3];
    $decision = $_POST['leadership'][4];
    $integrite = $_POST['leadership'][5];
    $audace = $_POST['leadership'][6];
    $negociation = $_POST['leadership'][7];
    $emotionnelle = $_POST['leadership'][8];
    $professionnalisme = $_POST['leadership'][9];


    $selectLead = "SELECT * FROM leadership";
    $resultLead = mysqli_query($conn, $selectLead);

    $insertLead = "INSERT INTO leadership(responsabilite, incertitude, vision, strategique, decision, integrite, audace, negociation, emotionnelle,professionnalisme , name_user, id) VALUES('$responsabilite',' $incertitude',' $vision','$strategique','$decision','$integrite','$audace','$negociation','$emotionnelle','$professionnalisme ','$name_user',3)";

    mysqli_query($conn, $insertLead);
    header('location:roue.php');
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Training Center 4.0</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/svg+xml">
    <!--lightbox-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css" type="text/css" />
    <!-- owl carousel css -->
    <link rel="stylesheet" href="./css/owl.carousel.min.css">
    <!-- font awesome icons -->
    <link rel="stylesheet" href="./css/font-awesome.css">
    <!-- bootstrap css -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <!-- main css -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
    <nav class="navbar navbar-expand-lg fixed-top">
        <!-- Brand -->
        <a class="navbar-brand" href="#"><img src="./images/UE4.0.png" alt="Logo du Training Center 4.0" width="150">
            <img src="./images/HASSTEC.PNG" alt="" width="80" style="margin-top: 78px;"></a>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style="margin: 0 70px;">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nous Connaitre
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="partenaires.php">Partenaires</a>
                        <a class="dropdown-item" href="inscription.php">Inscriptions</a>
                        <a class="dropdown-item" href="galerie.php">Galerie</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="apprenti.php">Accompagnement</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="actu.php">Actualités</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="learning.php">E-learning</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.paris-villaroche-training-center.parcours.pro/" target="_blank">Plateforme</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="soft-login.php">Soft-skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>

    </nav>


    <section class="user-page section-padding" style="height: 100vh; padding: 300px 0;background-image: url(./images/air-legend/bg-air.jpg); background-repeat: no-repeat; background-size: cover;
  background-position: center; ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" style="text-align: center;">Bonjour, <?php echo $_SESSION['user_name'] ?></h4>
                        <br>
                        <h2 style="text-align: center;">Qu'est ce que les soft-skills?</h2>
                        <br>
                        <p class="card-text">Les soft-skills sont les compétences interpersonnelles, comportementales et de personnalité qui sont importantes pour réussir dans un emploi. Ces compétences permettent aux individus de communiquer efficacement, de travailler en équipe, de résoudre les problèmes, de prendre des décisions et de s'adapter aux changements. Elles ne sont pas liées à une formation ou à une expérience professionnelle spécifique et peuvent être utilisées dans de nombreux contextes professionnels différents. Les exemples incluent la communication efficace, la résolution de conflits, la gestion de projet, la prise de décisions, la flexibilité et la capacité à travailler en équipe.</p>
                        <p class="card-text" style="text-align: center;">Pour avoir vos pourcentages au niveau des soft-skills, remplissez le tableau</p>
                        <div class="about-btn d-flex justify-content-center">
                            <a href="#tab" class="btn btn-2">Accéder au tableau</a>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="tab section-padding" id="tab">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title">
                        <h2>Tableau des soft-skills</h2>
                    </div>
                </div>
            </div>
            <br>
            <form action="">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active_tab1" style="border:1px solid #ccc" id="list_login_details">Apprentissage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive_tab1" id="list_personal_details" style="border:1px solid #ccc">Compétences intrapersonnelles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive_tab1" id="list_contact_details" style="border:1px solid #ccc">Réflexion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive_tab1" id="list_contact_details" style="border:1px solid #ccc">Communication</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive_tab1" id="list_contact_details" style="border:1px solid #ccc">Compétences interpersonnelles </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive_tab1" id="list_contact_details" style="border:1px solid #ccc">Leadership </a>
                    </li>
                </ul>
                <table>
                    <div class="tbl-content" style="margin-top:16px;">
                        <tbody>
                            <div class="tab-pane active"  id="apprentissage">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Apprentissage
                                    </div>
                                    <div class="panel-body">
                                        <tr>

                                            <td>Volonté d'apprendre
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>

                                                </select>
                                            </td>
                                            </td>
                                        </tr>
                                        <br>

                                        <tr>
                                            <td> Apprendre à apprendre </td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Auto-évaluation</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Contrôle de qualité</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Autonomie</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Esprit d'entreprendre</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Curiosité</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Compétence méthodologique</td>
                                            <td class="label-check">
                                                <select id="app" name="apprentissage[]">
                                                    <option value="<?php echo $acquis ?>">Acquis</option>
                                                    <option value="<?php echo $cours ?>">En cours d'acquisition</option>
                                                    <option value="<?php echo $compliquer  ?>">Compliqué pour moi</option>
                                                    <option value="<?php echo $aide  ?>">Besoin d'aide</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </div>

                </table>
            </form>
        </div>
    </section>


    <!-- BAND -->

    <section class="band ">
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src="./images/img-partenaires/logo-ue.jpg" height="100" width="150" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/REGION_IDF.jpg" height="100" width="200" alt="">
                </div>

                <div class="slide">
                    <img src="./images/img-partenaires/pole-emploi-2.jpg" height="100" width="130" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/melun.jpg" height="100" width="110" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/PREF77.jpg" height="100" width="100" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/AIF.jpg" height="100" width="120" alt="">
                </div>

                <div class="slide">
                    <img src="./images/img-partenaires/FF.png" height="100" width="190" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/EOZ.jpg" height="100" width="190" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/LdV.png" height="100" width="200" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/htec.jpg" height="100" width="200" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/cfa.png" height="100" width="200" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/cam-system.png" height="100" width="200" alt="">
                </div>
                <div class="slide">
                    <img src="./images/img-partenaires/jbplogo.jpg" height="100" width="200" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-col">
                        <h3>Training Center 4.0</h3>
                        <p class="text-footer">Pôle de ressources et d'accompagnement vers les métiers mécaniques
                            aéronautiques et industriels soutenu par l'Europe.</p>
                        <div class="footer-links">
                            <a href="https://m.facebook.com/trainingcentersympav/" target="_blank" class="footer__social">
                                <i class="fa fa-facebook-official"></i>
                            </a>
                            <a href="https://twitter.com/TCenter4_0/" target="_blank" class="footer__social">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/trainingcenter4.0/" target="_blank" class="footer__social">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCqan073e4fkLA_HtG_uWk8Q" target="_blank" class="footer__social">
                                <i class="fa fa-youtube-play"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/tcenter-sympav-28bb571a3/" target="_blank" class="footer__social">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="footer-col props">
                        <h3>À propos</h3>
                        <ul>
              <li><a href="apprenti.php">Accompagnement</a></li>
              <li><a href="learning.php">E-Learning</a></li>
              <li><a href="actu.php">Actualités</a></li>
              <li><a href="https://www.paris-villaroche-training-center.parcours.pro/">Plateforme</a></li>
              <!-- <li><a href="#">Soft-Skills</a></li> -->
              <li><a href="index.php#contact">Contact</a></li>

            </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="footer-col">
                        <h3>Informations</h3>
                        <p>Aérodrome de Melun Villaroche 77950 Montereau-sur-le-Jard</p>
                        <br>
                        <a class="mail" href="mailto:trainingcenter@parisvillaroche.com" class="footer__link">trainingcenter@ <br>
                            parisvillaroche.com
                        </a>
                        <br>
                        <a class="mail" href="tel:+33757079455" class="footer__link">01 60 68 11 44</a>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="footer-col">
                        <h3>Nos Politiques</h3>
                        <ul>
                            <li><a href="#">Politique d’utilisation des cookies</a></li>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright-text">&copy;2023 Training Center 4.0. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    </footer>


    <!-- jquery js -->
    <script src="js/jquery.min.js"></script>
    <!-- popper js -->
    <script src="js/popper.min.js"></script>
    <!-- bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
    <!-- owl carousel js -->
    <script src="js/owl.carousel.min.js"></script>
    <!-- ScrollIt js -->
    <script src="js/scrollIt.min.js"></script>
    <!-- main js -->
    <script src="js/main.js"></script>
</body>

</html>