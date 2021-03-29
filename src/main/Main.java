package main;

import p1.*;

public class Main
{
   public static void main(String[] args)
   {
       FileWorker fw1 = new FileWorker("C:\\Users\\пк\\Desktop\\MyFolder");
       FileWorker fw2 = new FileWorker("C:\\Users\\пк\\Desktop\\MyFolder\\MyFolder1");
       FileWorker fw3 = new FileWorker("C:\\Users\\пк\\Desktop\\MyFolder\\Idea.docx");
       fw1.setIsRecursive(true); fw2.setIsRecursive(false); fw3.setIsRecursive(false);

       ConsoleResulter r1 = new ConsoleResulter(fw1, new MD2Executor());
       FileResulter r2 = new FileResulter(fw2, new MD5Executor(), "C:\\Users\\пк\\IdeaProjects\\FileWorker\\output.txt");
       FileResulter r3 = new FileResulter(fw3, new SHA256Executor(), "C:\\Users\\пк\\IdeaProjects\\FileWorker\\out.txt");

       Singleton queue = Singleton.getInstance();
       queue.enqueue(CommandFactory.createInstance(fw1, r1), CommandFactory.createInstance(fw2, r2), CommandFactory.createInstance(fw3, r3));

       for (int i = 0; i < 3; i++)
       {
           queue.dequeue_start();
       }
    }
}
