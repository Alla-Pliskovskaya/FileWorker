package p1;

import java.util.ArrayList;

public abstract class Resulter
{
    protected final FileWorker fileWorker;
    protected final ArrayList<String> result;

    public Resulter(FileWorker fileWorker, IExecutable ex)
    {
        this.fileWorker = fileWorker;
        result = fileWorker.execute(ex);
    }
    abstract void dump();
}
