const Benchmark = {
    run: function() {
        const VAR_1 =
          "& I am a replacement & string & I have & four things to replace";
        const VAR_2 = "Hello";
        const VAR_6 = VAR_1.replace(/(&)/g, VAR_2);
    }
};