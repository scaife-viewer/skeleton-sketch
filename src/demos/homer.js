const cards = [
  '1.1-1.32',
  '1.33-1.67',
  '1.68-1.91',
  '1.92-1.129',
  '1.130-1.171',
  '1.172-1.205',
  '1.206-1.244',
  '1.245-1.284',
  '1.285-1.311',
  '1.312-1.344',
  '1.345-1.385',
  '1.386-1.427',
  '1.428-1.457',
  '1.458-1.492',
  '1.493-1.530',
  '1.531-1.567',
  '1.568-1.611',
  '2.1-2.34',
  '2.35-2.75',
  '2.76-2.108',
  '2.109-2.154',
  '2.155-2.187',
  '2.188-2.223',
  '2.224-2.264',
  '2.265-2.300',
  '2.301-2.335',
  '2.336-2.368',
  '2.369-2.418',
  '2.419-2.458',
  '2.459-2.510',
  '2.511-2.545',
  '2.546-2.580',
  '2.581-2.614',
  '2.615-2.652',
  '2.653-2.694',
  '2.695-2.733',
  '2.734-2.779',
  '2.780-2.818',
  '2.819-2.857',
  '2.858-2.877',
  '3.1-3.37',
  '3.38-3.75',
  '3.76-3.110',
  '3.111-3.145',
  '3.146-3.190',
  '3.191-3.224',
  '3.225-3.263',
  '3.264-3.301',
  '3.302-3.339',
  '3.340-3.382',
  '3.383-3.420',
  '3.421-3.461',
  '4.1-4.49',
  '4.50-4.84',
  '4.85-4.126',
  '4.127-4.182',
  '4.183-4.222',
  '4.223-4.264',
  '4.265-4.309',
  '4.310-4.349',
  '4.350-4.400',
  '4.401-4.445',
  '4.446-4.487',
  '4.488-4.516',
  '4.517-4.544',
  '5.1-5.42',
  '5.43-5.83',
  '5.84-5.120',
  '5.121-5.158',
  '5.159-5.200',
  '5.201-5.238',
  '5.239-5.279',
  '5.280-5.317',
  '5.318-5.362',
  '5.363-5.415',
  '5.416-5.459',
  '5.460-5.492',
  '5.493-5.532',
  '5.533-5.575',
  '5.576-5.626',
  '5.627-5.667',
  '5.668-5.710',
  '5.711-5.763',
  '5.764-5.791',
  '5.792-5.834',
  '5.835-5.863',
  '5.864-5.898',
  '5.899-5.909',
  '6.1-6.36',
  '6.37-6.71',
  '6.72-6.115',
  '6.116-6.155',
  '6.156-6.190',
  '6.191-6.231',
  '6.232-6.262',
  '6.263-6.296',
  '6.297-6.331',
  '6.332-6.368',
  '6.369-6.413',
  '6.414-6.465',
  '6.466-6.502',
  '6.503-6.529',
  '7.1-7.42',
  '7.43-7.91',
  '7.92-7.131',
  '7.132-7.174',
  '7.175-7.205',
  '7.206-7.243',
  '7.244-7.282',
  '7.283-7.312',
  '7.313-7.353',
  '7.354-7.397',
  '7.398-7.441',
  '7.442-7.482',
  '8.1-8.40',
  '8.41-8.77',
  '8.78-8.111',
  '8.112-8.150',
  '8.151-8.197',
  '8.198-8.244',
  '8.245-8.291',
  '8.292-8.334',
  '8.335-8.380',
  '8.381-8.424',
  '8.425-8.468',
  '8.469-8.511',
  '8.512-8.552',
  '8.553-8.565',
  '9.1-9.49',
  '9.50-9.88',
  '9.89-9.113',
  '9.114-9.161',
  '9.162-9.204',
  '9.205-9.243',
  '9.244-9.285',
  '9.286-9.327',
  '9.328-9.373',
  '9.374-9.416',
  '9.417-9.452',
  '9.453-9.491',
  '9.492-9.537',
  '9.538-9.580',
  '9.581-9.619',
  '9.620-9.668',
  '9.669-9.713',
  '10.1-10.41',
  '10.42-10.85',
  '10.86-10.127',
  '10.128-10.167',
  '10.168-10.217',
  '10.218-10.253',
  '10.254-10.294',
  '10.295-10.331',
  '10.332-10.371',
  '10.372-10.411',
  '10.412-10.453',
  '10.454-10.502',
  '10.503-10.539',
  '10.540-10.579',
  '11.1-11.46',
  '11.47-11.83',
  '11.84-11.121',
  '11.122-11.162',
  '11.163-11.209',
  '11.210-11.247',
  '11.248-11.290',
  '11.291-11.335',
  '11.336-11.367',
  '11.368-11.410',
  '11.411-11.455',
  '11.456-11.488',
  '11.489-11.530',
  '11.531-11.574',
  '11.575-11.615',
  '11.616-11.654',
  '11.655-11.695',
  '11.696-11.736',
  '11.737-11.779',
  '11.780-11.821',
  '11.822-11.848',
  '12.1-12.33',
  '12.34-12.79',
  '12.80-12.107',
  '12.108-12.152',
  '12.153-12.194',
  '12.195-12.229',
  '12.230-12.276',
  '12.277-12.328',
  '12.329-12.363',
  '12.364-12.399',
  '12.400-12.441',
  '12.442-12.471',
  '13.1-13.31',
  '13.32-13.58',
  '13.59-13.80',
  '13.81-13.124',
  '13.125-13.154',
  '13.155-13.194',
  '13.195-13.230',
  '13.231-13.265',
  '13.266-13.294',
  '13.295-13.327',
  '13.328-13.360',
  '13.361-13.401',
  '13.402-13.423',
  '13.424-13.454',
  '13.455-13.486',
  '13.487-13.525',
  '13.526-13.559',
  '13.560-13.600',
  '13.601-13.639',
  '13.640-13.672',
  '13.673-13.722',
  '13.723-13.753',
  '13.754-13.787',
  '13.788-13.820',
  '13.821-13.837',
  '14.1-14.26',
  '14.27-14.63',
  '14.64-14.102',
  '14.103-14.153',
  '14.154-14.192',
  '14.193-14.241',
  '14.242-14.269',
  '14.270-14.311',
  '14.312-14.351',
  '14.352-14.377',
  '14.378-14.401',
  '14.402-14.439',
  '14.440-14.474',
  '14.475-14.505',
  '14.506-14.522',
  '15.1-15.33',
  '15.34-15.77',
  '15.78-15.112',
  '15.113-15.148',
  '15.149-15.183',
  '15.184-15.219',
  '15.220-15.252',
  '15.253-15.280',
  '15.281-15.311',
  '15.312-15.342',
  '15.343-15.378',
  '15.379-15.404',
  '15.405-15.441',
  '15.442-15.477',
  '15.478-15.513',
  '15.514-15.558',
  '15.559-15.591',
  '15.592-15.652',
  '15.653-15.695',
  '15.696-15.746',
  '16.1-16.45',
  '16.46-16.73',
  '16.74-16.111',
  '16.112-16.154',
  '16.155-16.199',
  '16.200-16.248',
  '16.249-16.283',
  '16.284-16.305',
  '16.306-16.350',
  '16.351-16.393',
  '16.394-16.438',
  '16.439-16.476',
  '16.477-16.507',
  '16.508-16.547',
  '16.548-16.568',
  '16.569-16.618',
  '16.619-16.658',
  '16.659-16.697',
  '16.698-16.725',
  '16.726-16.749',
  '16.750-16.776',
  '16.777-16.817',
  '16.818-16.867',
  '17.1-17.43',
  '17.44-17.81',
  '17.82-17.105',
  '17.106-17.139',
  '17.140-17.184',
  '17.185-17.208',
  '17.209-17.245',
  '17.246-17.273',
  '17.274-17.318',
  '17.319-17.365',
  '17.366-17.399',
  '17.400-17.422',
  '17.423-17.455',
  '17.456-17.490',
  '17.491-17.515',
  '17.516-17.542',
  '17.543-17.566',
  '17.567-17.596',
  '17.597-17.625',
  '17.626-17.655',
  '17.656-17.693',
  '17.694-17.734',
  '17.735-17.761',
  '18.1-18.21',
  '18.22-18.64',
  '18.65-18.96',
  '18.97-18.126',
  '18.127-18.147',
  '18.148-18.180',
  '18.181-18.218',
  '18.219-18.242',
  '18.243-18.283',
  '18.284-18.323',
  '18.324-18.359',
  '18.360-18.387',
  '18.388-18.427',
  '18.428-18.461',
  '18.462-18.489',
  '18.490-18.526',
  '18.527-18.560',
  '18.561-18.589',
  '18.590-18.616',
  '19.1-19.36',
  '19.37-19.73',
  '19.74-19.113',
  '19.114-19.153',
  '19.154-19.183',
  '19.184-19.214',
  '19.215-19.237',
  '19.238-19.275',
  '19.276-19.308',
  '19.309-19.348',
  '19.349-19.386',
  '19.387-19.424',
  '20.1-20.29',
  '20.30-20.53',
  '20.54-20.85',
  '20.86-20.109',
  '20.110-20.143',
  '20.144-20.175',
  '20.176-20.198',
  '20.199-20.241',
  '20.242-20.272',
  '20.273-20.308',
  '20.309-20.339',
  '20.340-20.372',
  '20.373-20.418',
  '20.419-20.454',
  '20.455-20.489',
  '20.490-20.503',
  '21.1-21.33',
  '21.34-21.63',
  '21.64-21.96',
  '21.97-21.135',
  '21.136-21.160',
  '21.161-21.199',
  '21.200-21.232',
  '21.233-21.271',
  '21.272-21.297',
  '21.298-21.323',
  '21.324-21.360',
  '21.361-21.399',
  '21.400-21.433',
  '21.434-21.467',
  '21.468-21.501',
  '21.502-21.536',
  '21.537-21.570',
  '21.571-21.611',
  '22.1-22.37',
  '22.38-22.76',
  '22.77-22.110',
  '22.111-22.130',
  '22.131-22.176',
  '22.177-22.223',
  '22.224-22.259',
  '22.260-22.288',
  '22.289-22.336',
  '22.337-22.366',
  '22.367-22.404',
  '22.405-22.436',
  '22.437-22.472',
  '22.473-22.515',
  '23.1-23.34',
  '23.35-23.53',
  '23.54-23.92',
  '23.93-23.137',
  '23.138-23.160',
  '23.161-23.191',
  '23.192-23.225',
  '23.226-23.261',
  '23.262-23.286',
  '23.287-23.318',
  '23.319-23.350',
  '23.351-23.387',
  '23.388-23.428',
  '23.429-23.472',
  '23.473-23.513',
  '23.514-23.554',
  '23.555-23.585',
  '23.586-23.623',
  '23.624-23.663',
  '23.664-23.699',
  '23.700-23.739',
  '23.740-23.783',
  '23.784-23.825',
  '23.826-23.858',
  '23.859-23.897',
  '24.1-24.21',
  '24.22-24.63',
  '24.64-24.92',
  '24.93-24.119',
  '24.120-24.158',
  '24.159-24.199',
  '24.200-24.227',
  '24.228-24.264',
  '24.265-24.298',
  '24.299-24.338',
  '24.339-24.371',
  '24.372-24.404',
  '24.405-24.439',
  '24.440-24.467',
  '24.468-24.506',
  '24.507-24.551',
  '24.552-24.595',
  '24.596-24.642',
  '24.643-24.676',
  '24.677-24.706',
  '24.707-24.745',
  '24.746-24.775',
  '24.776-24.804',
];

export const iliad = [
  'μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος οὐλομένην, ἣ μυρίʼ Ἀχαιοῖς ἄλγεʼ ἔθηκε, πολλὰς δʼ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν οἰωνοῖσί τε πᾶσι, Διὸς δʼ ἐτελείετο βουλή, ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς. τίς τʼ ἄρ σφωε θεῶν ἔριδι ξυνέηκε',
  'μάχεσθαι; Λητοῦς καὶ Διὸς υἱός· ὃ γὰρ βασιλῆϊ χολωθεὶς νοῦσον ἀνὰ στρατὸν ὄρσε κακήν, ὀλέκοντο δὲ λαοί, οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα Ἀτρεΐδης· ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν λυσόμενός τε θύγατρα φέρων τʼ ἀπερείσιʼ ἄποινα, στέμματʼ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς, Ἀτρεΐδα δὲ μάλιστα δύω, κοσμήτορε λαῶν· Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοί, ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματʼ ἔχοντες ἐκπέρσαι Πριάμοιο πόλιν, εὖ δʼ οἴκαδʼ ἱκέσθαι· παῖδα δʼ ἐμοὶ λύσαιτε φίλην, τὰ δʼ ἄποινα δέχεσθαι, ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.ἔνθʼ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ αἰδεῖσθαί θʼ ἱερῆα καὶ ἀγλαὰ δέχθαι ἄποινα· ἀλλʼ οὐκ Ἀτρεΐδῃ Ἀγαμέμνονι ἥνδανε θυμῷ, ἀλλὰ κακῶς ἀφίει, κρατερὸν δʼ ἐπὶ μῦθον ἔτελλε· μή σε γέρον κοίλῃσιν ἐγὼ παρὰ νηυσὶ κιχείω ἢ νῦν δηθύνοντʼ ἢ ὕστερον αὖτις ἰόντα, μή νύ τοι οὐ χραίσμῃ σκῆπτρον καὶ στέμμα θεοῖο· τὴν δʼ ἐγὼ οὐ λύσω· πρίν μιν καὶ γῆρας ἔπεισιν ἡμετέρῳ ἐνὶ οἴκῳ ἐν Ἄργεϊ τηλόθι πάτρης ἱστὸν ἐποιχομένην καὶ ἐμὸν λέχος ἀντιόωσαν· ἀλλʼ ἴθι μή μʼ ἐρέθιζε σαώτερος ὥς κε νέηαι.ὣς ἔφατʼ, ἔδεισεν δʼ ὃ γέρων καὶ ἐπείθετο',
  'μύθῳ· βῆ δʼ ἀκέων παρὰ θῖνα πολυφλοίσβοιο θαλάσσης· πολλὰ δʼ ἔπειτʼ ἀπάνευθε κιὼν ἠρᾶθʼ ὃ γεραιὸς Ἀπόλλωνι ἄνακτι, τὸν ἠΰκομος τέκε Λητώ· κλῦθί μευ ἀργυρότοξʼ, ὃς Χρύσην ἀμφιβέβηκας Κίλλάν τε ζαθέην Τενέδοιό τε ἶφι ἀνάσσεις, Σμινθεῦ εἴ ποτέ τοι χαρίεντʼ ἐπὶ νηὸν ἔρεψα, ἢ εἰ δή ποτέ τοι κατὰ πίονα μηρίʼ ἔκηα ταύρων ἠδʼ αἰγῶν, τὸ δέ μοι κρήηνον ἐέλδωρ· τίσειαν Δαναοὶ ἐμὰ δάκρυα σοῖσι βέλεσσιν.ὣς ἔφατʼ εὐχόμενος, τοῦ δʼ ἔκλυε Φοῖβος',
  'Ἀπόλλων, βῆ δὲ κατʼ Οὐλύμποιο καρήνων χωόμενος κῆρ, τόξʼ ὤμοισιν ἔχων ἀμφηρεφέα τε φαρέτρην· ἔκλαγξαν δʼ ἄρʼ ὀϊστοὶ ἐπʼ ὤμων χωομένοιο, αὐτοῦ κινηθέντος· ὃ δʼ ἤϊε νυκτὶ ἐοικώς.ἕζετʼ ἔπειτʼ ἀπάνευθε νεῶν, μετὰ δʼ ἰὸν ἕηκε· δεινὴ δὲ κλαγγὴ γένετʼ ἀργυρέοιο βιοῖο· οὐρῆας μὲν πρῶτον ἐπῴχετο καὶ κύνας ἀργούς, αὐτὰρ ἔπειτʼ αὐτοῖσι βέλος ἐχεπευκὲς ἐφιεὶς βάλλʼ· αἰεὶ δὲ πυραὶ νεκύων καίοντο θαμειαί.ἐννῆμαρ μὲν ἀνὰ στρατὸν ᾤχετο κῆλα θεοῖο, τῇ δεκάτῃ δʼ ἀγορὴν δὲ καλέσσατο λαὸν Ἀχιλλεύς· τῷ γὰρ ἐπὶ φρεσὶ θῆκε θεὰ λευκώλενος Ἥρη· κήδετο γὰρ Δαναῶν, ὅτι ῥα θνήσκοντας ὁρᾶτο.οἳ δʼ ἐπεὶ οὖν ἤγερθεν ὁμηγερέες τε γένοντο, τοῖσι δʼ ἀνιστάμενος μετέφη πόδας ὠκὺς Ἀχιλλεύς· Ἀτρεΐδη νῦν ἄμμε παλιμπλαγχθέντας ὀΐω ἂψ ἀπονοστήσειν, εἴ κεν θάνατόν γε φύγοιμεν, εἰ δὴ ὁμοῦ πόλεμός τε δαμᾷ καὶ λοιμὸς Ἀχαιούς· ἀλλʼ ἄγε δή τινα μάντιν ἐρείομεν ἢ ἱερῆα ἢ καὶ ὀνειροπόλον, καὶ γάρ τʼ ὄναρ ἐκ Διός ἐστιν, ὅς κʼ εἴποι ὅ τι τόσσον ἐχώσατο Φοῖβος Ἀπόλλων, εἴτʼ ἄρʼ ὅ γʼ εὐχωλῆς ἐπιμέμφεται ἠδʼ ἑκατόμβης, αἴ κέν πως ἀρνῶν κνίσης αἰγῶν τε τελείων βούλεται ἀντιάσας ἡμῖν ἀπὸ λοιγὸν ἀμῦναι.ἤτοι ὅ γʼ ὣς εἰπὼν κατʼ ἄρʼ ἕζετο· τοῖσι δʼ',
  'ἀνέστη Κάλχας Θεστορίδης οἰωνοπόλων ὄχʼ ἄριστος, ὃς ᾔδη τά τʼ ἐόντα τά τʼ ἐσσόμενα πρό τʼ ἐόντα, καὶ νήεσσʼ ἡγήσατʼ Ἀχαιῶν Ἴλιον εἴσω ἣν διὰ μαντοσύνην, τήν οἱ πόρε Φοῖβος Ἀπόλλων· ὅ σφιν ἐὺ φρονέων ἀγορήσατο καὶ μετέειπεν· ὦ Ἀχιλεῦ κέλεαί με Διῒ φίλε μυθήσασθαι μῆνιν Ἀπόλλωνος ἑκατηβελέταο ἄνακτος· τοὶ γὰρ ἐγὼν ἐρέω· σὺ δὲ σύνθεο καί μοι ὄμοσσον ἦ μέν μοι πρόφρων ἔπεσιν καὶ χερσὶν ἀρήξειν· ἦ γὰρ ὀΐομαι ἄνδρα χολωσέμεν, ὃς μέγα πάντων Ἀργείων κρατέει καί οἱ πείθονται Ἀχαιοί· κρείσσων γὰρ βασιλεὺς ὅτε χώσεται ἀνδρὶ χέρηϊ· εἴ περ γάρ τε χόλον γε καὶ αὐτῆμαρ καταπέψῃ, ἀλλά τε καὶ μετόπισθεν ἔχει κότον, ὄφρα τελέσσῃ, ἐν στήθεσσιν ἑοῖσι· σὺ δὲ φράσαι εἴ με σαώσεις.τὸν δʼ ἀπαμειβόμενος προσέφη πόδας ὠκὺς',
  'Ἀχιλλεύς· θαρσήσας μάλα εἰπὲ θεοπρόπιον ὅ τι οἶσθα· οὐ μὰ γὰρ Ἀπόλλωνα Διῒ φίλον, ᾧ τε σὺ Κάλχαν εὐχόμενος Δαναοῖσι θεοπροπίας ἀναφαίνεις, οὔ τις ἐμεῦ ζῶντος καὶ ἐπὶ χθονὶ δερκομένοιο σοὶ κοίλῃς παρὰ νηυσί βαρείας χεῖρας ἐποίσει συμπάντων Δαναῶν, οὐδʼ ἢν Ἀγαμέμνονα εἴπῃς, ὃς νῦν πολλὸν ἄριστος Ἀχαιῶν εὔχεται εἶναι.καὶ τότε δὴ θάρσησε καὶ ηὔδα μάντις',
  'ἀμύμων· οὔ τʼ ἄρ ὅ γʼ εὐχωλῆς ἐπιμέμφεται οὐδʼ ἑκατόμβης, ἀλλʼ ἕνεκʼ ἀρητῆρος ὃν ἠτίμησʼ Ἀγαμέμνων, οὐδʼ ἀπέλυσε θύγατρα καὶ οὐκ ἀπεδέξατʼ ἄποινα, τοὔνεκʼ ἄρʼ ἄλγεʼ ἔδωκεν ἑκηβόλος ἠδʼ ἔτι δώσει· οὐδʼ ὅ γε πρὶν Δαναοῖσιν ἀεικέα λοιγὸν ἀπώσει πρίν γʼ ἀπὸ πατρὶ φίλῳ δόμεναι ἑλικώπιδα κούρην ἀπριάτην ἀνάποινον, ἄγειν θʼ ἱερὴν ἑκατόμβην ἐς Χρύσην· τότε κέν μιν ἱλασσάμενοι πεπίθοιμεν.ἤτοι ὅ γʼ ὣς εἰπὼν κατʼ ἄρʼ ἕζετο· τοῖσι δʼ',
];

export default cards;
