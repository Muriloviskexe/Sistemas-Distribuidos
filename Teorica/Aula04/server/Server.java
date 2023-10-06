package Teorica.Aula04.server;

import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.Scanner;

public class Server {

    public static void main(String[] args) {
        ServerSocket serverSocket;
        Socket socketClient;

        //define a porta de comunicação
        final int PORT = 12345;
        Scanner input;

        //output envia a mensagem
        PrintStream output;

        HashMap<String, String> dictionary = new HashMap<>();

        dictionary.put("red", "Vermelho");
        dictionary.put("green", "Verde");
        dictionary.put("white", "Branco");
        dictionary.put("black", "Preto");
        dictionary.put("purple", "Roxo");
        dictionary.put("gray", "Cinza");
        dictionary.put("blue", "Azul");

    // criar o ServerSocket e fazer o bind
        try {

            //Cria um socket para comunicação
            serverSocket = new ServerSocket(PORT);
            System.out.println("Bind success!");

        } catch (Exception e) {
            System.out.println("Erro: Porta em uso");
            return;
        }

        // aguardar pedido de conexão
        try {
            System.out.println("Esperando um cliente...");

            //Fica aguardando uma mensagem do cliente, até lá nada acontece
            socketClient = serverSocket.accept();

            //input lê a mensagem recebida
            input = new Scanner(socketClient.getInputStream());

            //output vai mandar uma mensagem de volta
            output = new PrintStream(socketClient.getOutputStream());

            System.out.println("Conectado com " + socketClient.getInetAddress());


        } catch (Exception e) {
            System.out.println("Erro ao conectar com o cliente");
            return;
        }

        // etapa de comunicação
        try {
            String msg;
            do {

                //lê a mensagem recebida
                msg = input.nextLine();
                System.out.println("Recebido: " + msg);
                
                //encaminha a mensagem de acordo com o correspontente no dicionario
                output.println(dictionary.get(msg));

            } while (!msg.equals("exit")); //não encerra enquanto não receber a mensagem certa

        } catch (Exception e) {
            System.out.println("Erro ao receber os dados");
        }

        // encerrar a conexão
        try {

            //encerra os dois sockets
            socketClient.close();
            serverSocket.close();
        } catch (Exception e) {

        }
    }
}