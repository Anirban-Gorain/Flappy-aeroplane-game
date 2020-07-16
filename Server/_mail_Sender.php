<?php

    $_to = "gorainanirban@gmail.com";
    $_name_Data = $_POST['_name'];
    $_mail_Address_Data = $_POST['_mail_Address'];
    $_message_Data = $_POST['_message'];
    $_headers_Data = 'From: ' . $_mail_Address_Data;
    $_subject_Data = "Response from the flappy aeroplane website";

    $_formatted_Data = "You have received following details: ";
    $_formatted_Data .= "\r\nVisitor name: " . $_name_Data;
    $_formatted_Data .= "\r\nVisitor email " . $_mail_Address_Data;
    $_formatted_Data .= "\r\nVisitor message: " . $_message_Data;

    if(mail($_to, $_subject_Data, $_formatted_Data, $_headers_Data) == true)
    {

        header("Location: https://flappyaeroplane.000webhostapp.com/");
        exit();

    }
    else
    {

        echo 'Error';

    }

?>