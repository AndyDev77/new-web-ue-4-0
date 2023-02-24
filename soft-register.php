<?php

@include 'config.php';

if (isset($_POST['submit'])) {

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = $_POST['phone'];
    $pass = md5($_POST['password']);
    $cpass = md5($_POST['cpassword']);
    $user_type = "user";

    $select = " SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";

    $result = mysqli_query($conn, $select);

    if (mysqli_num_rows($result) > 0) {

        $error[] = 'Compte déjà existant!';
    } else {

        if ($pass != $cpass) {
            $error[] = 'Le mot de passe ne correspond pas !';
        } else {
            $insert = "INSERT INTO user_form(name, email, phone, password, user_type) VALUES('$name','$email','$phone','$pass','$user_type')";
            mysqli_query($conn, $insert);
            header('location:login_form.php');
        }
    }
};


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

    <section class="contact section-padding" style="background-image: url('./images/bg.jpg');  
    background-size: cover; 
    height: 90vh; 
    min-height: 300px; 
    position: relative; 
    color: var(--white); 
    text-shadow: var(--shadow-black-100);
    padding: 200px 0;">
        <div class="container " style="background-color: rgba(0, 0, 0, 0.4); padding: 40px 80px; border-radius: 15px;">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title">
                        <h2>Inscrivez-vous</h2>
                    </div>
                </div>
            </div>
            <?php
            if (isset($error)) {
                foreach ($error as $error) {
                    echo '<span class="error-msg">' . $error . '</span>';
                };
            };
            ?>
            <br><br>
            <div class="contact-form">
                <div class="row justify-content-center ">
                    <form action="" method="post" class="login-email">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" placeholder="Votre nom et prénom" name="name" id="nom" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="mail" placeholder="Votre email" name="email" id="email" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="tel" placeholder="Votre téléphone" name="phone" id="phone" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="password" placeholder="Votre mot de passe" name="password" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="password" placeholder="Confirmez votre mot de passe" name="cpassword" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center">
                            <div>
                                <div class="form-group">
                                    <button type="submit" id="btn-submit" name="submit" class="btn-button">Envoyer</button>
                                </div>
                            </div>
                        </div>
                        <p class="login-register-text" style="text-align: center;">Vous avez déjà un compte? <a href="soft-login.php">Connecte-toi maintenant</a></p>
                    </form>
                </div>
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