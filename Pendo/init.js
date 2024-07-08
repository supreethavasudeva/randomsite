
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
        // This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
        // Call this function after users are authenticated in your app and your visitor and account id values are available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              'sufddsgdfp-pendo',   // Required if user is logged in, default creates anonymous ID
             email:       'sup-pendo@gmail.com',
                full_name:    'sup-pendo',
                role:        'admin',
                location: 'EU'
            },

            account: {
                id:           'sup-pendo-account', // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
                name:         'sup-name', 
                pet_name: 'kv',
                is_paying:   'no',
             monthly_value: '1000'
            }
        });
})('19d279d9-f5fe-4614-7b1c-20469d39913a');

