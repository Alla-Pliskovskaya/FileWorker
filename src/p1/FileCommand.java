package p1;

public class FileCommand implements ICommand
{
    private final FileWorker fileWorker;
    private final Resulter resulter;

    public FileCommand(FileWorker fileWorker, Resulter resulter)
    {
        this.fileWorker = fileWorker;
        this.resulter = resulter;
    }
    @Override
    public void start() {
        resulter.dump();
    }
}
