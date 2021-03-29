package p1;

public class ConsoleResulter extends Resulter {

    public ConsoleResulter(FileWorker fileWorker, IExecutable ex) {
        super(fileWorker, ex);
    }

    @Override
    public void dump() {
        for (String res : result)
            System.out.println(res);
    }
}
