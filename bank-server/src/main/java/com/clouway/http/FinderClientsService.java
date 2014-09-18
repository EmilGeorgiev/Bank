package com.clouway.http;

import com.clouway.core.Client;
import com.clouway.core.PersistentClients;
import com.google.inject.Inject;
import com.google.sitebricks.At;
import com.google.sitebricks.client.transport.Json;
import com.google.sitebricks.headless.Reply;
import com.google.sitebricks.headless.Service;
import com.google.sitebricks.http.Get;

import java.util.List;

/**
 * Created by emil on 14-9-15.
 */
@At("/fetchClients")
@Service
public class FinderClientsService {


    private final PersistentClients persistentClients;

    @Inject
    public FinderClientsService(PersistentClients persistentClients) {

        this.persistentClients = persistentClients;
    }


    @Get
    public Reply<?> fetchClients() {

        List<Client> clients = persistentClients.findAllClients();

        return Reply.with(clients).as(Json.class);
    }
}
