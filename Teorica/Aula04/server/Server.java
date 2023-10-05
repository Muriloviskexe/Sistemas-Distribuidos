package Teorica.Aula04.server;

import java.net.ServerSocket;
import java.net.Socket;

public class Server {

    public static void main(String[] args){
        ServerSocket serverSocket;
        final int PORT = 12345;
        Socket socketClient;

    //Criar o ServerSocket e fazer o bind
    try{
        serverSocket = new ServerSocket(PORT);
        System.out.println("Bind Sucess");
    } catch (Exception e) {
        System.out.println("Erro: Porta em uso");
        return;
    }

    //Aguardar pedido de conexão
    try{
        System.out.println("Esperando Cliente....");
        socketClient = serverSocket.accept();
        System.out.println("Conexão bem sucedida com " + socketClient.getInetAddress());
    } 
        catch (Exception e){
            System.out.println("Erro: Conexão falhou");
            return;
    }
    
    //Etapa de comunicação

    
    //Encerrar conexão
    try {
        socketClient.close();
        serverSocket.close();
    } catch (Exception e) {
        
    }
}}