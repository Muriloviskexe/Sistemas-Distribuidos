package Teorica.Aula04.cliente;

import java.net.Socket;

public class Cliente{

    public static void main(String[] args){
        Socket socket;
        final int PORT = 12345;
        final String IP = "localhost";

    //Criar Socket e solicitar conexão
    try {
        socket = new Socket(IP, PORT);
        System.out.println("Conectado com sucesso!!");
    } catch (Exception e) {
        System.out.println("Erro de conexão");
        return;
    }
    //Etapa de comunicação

    //Encerrar conexão
    try {
        socket.close();
    } catch (Exception e) {
        
    }
}}