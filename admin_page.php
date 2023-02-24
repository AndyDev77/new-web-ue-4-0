<?php

@include 'config.php';

session_start();

if (!isset($_SESSION['admin_name'])) {
    header('location:login_form.php');
}

$query = "SELECT * FROM user_form WHERE user_type = 'user'";
$req = $conn->prepare($query);
$req->execute();

$resultSet = $req->get_result();
$data = $resultSet->fetch_all(MYSQLI_ASSOC);

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Training Center 4.0</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
    <style>
        /* USER ET ADMIN*/

        section.tab {
            padding: 180px 0;
        }

        h2,
        h3 {
            text-align: center;
            /* margin: 50px auto; */
        }

        input[type="checkbox"] {
            display: none;
        }

        .tab-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        table {
            border-collapse: collapse;
            box-shadow: 0 5px 10px #e1e5ee;
            background-color: white;
            text-align: left;
            overflow: hidden;
        }

        table thead {
            box-shadow: 0 5px 10px #e1e5ee;
        }

        table th {
            padding: 1rem 2rem;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            font-size: 0.7rem;
            font-weight: 900;
        }

        table td {
            padding: 1rem 2rem;
        }

        table a {
            text-decoration: none;
            color: #2962ff;
        }

        table .status {
            border-radius: 0.2rem;
            background-color: red;
            padding: 0.2rem 1rem;
            text-align: center;
        }

        table .status-apprentissage {
            background-color: #ffcdd2;
            color: #c62828;
        }

        table .status-intrapersonnelles {
            background-color: #B0E0E6;
            color: #0984e3;
        }

        table .status-reflexion {
            background-color: #fff0c2;
            color: #a68b00;
        }

        table .status-communication {
            background-color: #DDA0DD;
            color: #4834d4;
        }

        table .status-interpersonnelles {
            background-color: #FED8B1;
            color: #f0932b;
        }


        table .status-leadership {
            background-color: #c8e6c9;
            color: #388e3c;
        }

        table .amount {
            text-align: right;
        }

        table tr:nth-child(even) {
            background-color: #f4f6fb;
        }


        /* btn-admin */

        .btn-admin {
            border-radius: 0.2rem;
            padding: 0.2rem 1rem;
            text-align: center;
            background-color: #ffcdd2;
            color: #c62828;
        }

        .btn-admin:hover {
            color: #fff;
        }
    </style>
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


    <section class="section-padding" style="padding: 100px 0">
        <div class="container">
            <h2>Bonjour, <?php echo $_SESSION['admin_name'] ?></h2>
            <br><br>
            <h3 style="text-align: center;">Liste des utilisateurs</h3>
            <br>
            <div class="tab-container d-flex justify-content-center align-items-center">

                <br>

                <table>
                    <thead >

                        <tr>
                            <th>Id</th>
                            <th>Nom/Prénom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Profil</th>
                        </tr>

                    </thead>
                    <tbody>

                        <?php

                        foreach ($data as $rm) {

                        ?>

                            <tr>
                                <td><?php echo '<p class="status status-leadership">' . $rm['id']; ?></td>
                                <td>
                                    <?php
                                    if ($rm['user_type'] == 'user') {
                                        echo '<p class="status status-intrapersonnelles">' . $rm['name'] . '</p>';
                                    }
                                    ?>

                                </td>
                                <td><?php echo '<p class="status status-reflexion">' . $rm['email']; ?></td>
                                <td><?php echo '<p class="status status-interpersonnelles">' . $rm['phone']; ?></td>
                                <td>
                                    <a href="voir-profil.php?id=<?= $rm['id'] ?>" class="btn-admin" name="btn-admin">Voir les softs-skills</a>
                                </td>
                            </tr>

                        <?php

                        }

                        ?>

                    </tbody>
                </table>
            </div>
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
                <div class="col-lg-3 col-md-6">
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
                <div class="col-lg-3 col-md-6">
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
                <div class="col-lg-3 col-md-6">
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

                <div class="col-lg-3 col-md-6">
                    <div class="footer-col">
                        <h3>Nos Politiques</h3>
                        <ul>
                            <li><a href="#">Politique d’utilisation des cookies</a></li>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>
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