package p1;

import java.util.*;

public class Singleton
{
    private static Singleton instance;
    private static Queue<ICommand> queue;

    private Singleton() {
        queue = new LinkedList<>();
    }

    public static Singleton getInstance()
    {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void enqueue(ICommand... commands)
    {
        queue.addAll(Arrays.asList(commands));
    }

    public void dequeue_start()
    {
        queue.poll().start();
    }
}
