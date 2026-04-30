const Benchmark = {
    run: function() {
        var VAR_1 =
          "Hello This is going to be a really long string to do some scanning loooking for a bunch of characters in it abcdefghijlkmnopqrstuvwxy";
        /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)/i.test(
          VAR_1,
        );
    }
};