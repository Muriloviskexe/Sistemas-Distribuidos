package Teorica.Aula04.cliente;

import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class Cliente {
//* Cria o main do java
    public static void main(String[] args) {

        //Variaveis
        Socket socket;

        //define a porta de comunicação
        final int PORT = 12345;
        final String IP = "127.0.0.1"; // localhost


        //output envia a mensagem
        PrintStream output;
        Scanner input;

        //* criar o socket e solicita a conexão
        try {

            //Faz a conexão de socket do client com o serve
            socket = new Socket(IP, PORT);
            output = new PrintStream(socket.getOutputStream());

            //InputStream faz o recebimento de comunicação
            input = new Scanner(socket.getInputStream());
            //Menssagem de confirmação
            System.out.println("Conectado com sucesso!");

        } catch (Exception e) {
            System.out.println("Erro na conexão");
            return;
        }

        //* etapa de comunicação
        try {
            Scanner teclado = new Scanner(System.in);
            String msg, tranlate;
            do {
                System.out.println("Digite uma cor:");
                //grava o que foi escrito no console
                msg = teclado.nextLine();

                //output envia a mensagem
                output.println(msg);

                //Lê o que recebeu do servidor
                tranlate = input.nextLine();
                System.out.println("Tradução: " + tranlate);

            } while(!msg.equals("exit"));//Enquanto a mensagem não for 'exit' não fecha a comunicação

        } catch (Exception e) {
            System.out.println("Erro ao enviar os dados");
        }

        //* encerrar a conexão
        try {
            
            //encerra o socket
            socket.close();
        } catch (Exception e) {
            
        }
    }
}