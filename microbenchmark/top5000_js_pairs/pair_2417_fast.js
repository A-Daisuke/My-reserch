const Benchmark = {
    run: function() {
        var VAR_1 = "http://www.my-website.com/folder/file.html?par1=hello",
          VAR_2 = 10000;
        while (VAR_2--) {
          /par\d/.test(VAR_1);
        }
    }
};