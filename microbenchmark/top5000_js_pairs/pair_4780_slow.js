const Benchmark = {
    run: function() {
        const VAR_1 =
          "& I am a replacement & string & I have & four things to replace";
        const VAR_2 = "Hello";
        VAR_1.split("&");
        const VAR_3 = [VAR_1[0]];
        for (let VAR_4 = 1; VAR_4 < VAR_1.length; VAR_4++) {
          VAR_3.push(VAR_2, VAR_1[VAR_4]);
        }
        const VAR_5 = VAR_3.join("");
    }
};