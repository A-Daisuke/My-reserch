const Benchmark = {
    run: function() {
        var VAR_1 =
          "Hello This is going to be a really long string to do some scanning loooking for a bunch of characters in it abcdefghijlkmnopqrstuvwxy";
        var VAR_2 = true;
        for (var VAR_3 = "a".charCodeAt(0); VAR_3 <= "z".charCodeAt(0); VAR_3++) {
          if (VAR_1.indexOf(String.fromCharCode(VAR_3)) == -1) {
            VAR_2 = false;
            break;
          }
        }
    }
};