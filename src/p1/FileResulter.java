package p1;

import java.io.*;

public class FileResulter extends Resulter
{
    private final String path;

    public FileResulter(FileWorker fileWorker, IExecutable ex, String path) {
        super(fileWorker, ex);
        this.path = path;
    }

    @Override
    public void dump() {
        try {
            File file = new File(path);
            FileWriter fw = new FileWriter(file);
            BufferedWriter writer = new BufferedWriter(fw);
            for (String line : result) {
                writer.newLine();
                writer.write(line);
            }
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
