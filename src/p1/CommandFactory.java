package p1;

public class CommandFactory
{
    public static ICommand createInstance(FileWorker fw, Resulter r) {
        return new FileCommand(fw, r);
    }
}
