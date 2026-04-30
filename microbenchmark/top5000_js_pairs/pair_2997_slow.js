const Benchmark = {
    run: function() {
        var VAR_1 = "asdf\nlkjsdf;lkjasdfjlsadf\r\nblah\none\ntwo\n\nthree\r\nfour\rfive\r";
        function FUNCTION_1(VAR_2) {
          var VAR_3 = VAR_1.slice(0, VAR_2);
          VAR_3 = VAR_3.split("").reverse().join("");
          var VAR_4 = VAR_3.search(/[\r\n]/);
          if (VAR_4 != -1) {
            return VAR_2 - VAR_4;
          }
          return 0;
        }
        for (var VAR_5 = 0; VAR_5 <= VAR_1.length; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};