package com.clouway.persistent;

import com.clouway.core.Client;
import com.clouway.core.PersistentClients;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by emil on 14-9-15.
 */
public class PersistentClientRepository implements PersistentClients{
    @Override
    public List<Client> findAllClients() {
        List<Client> clients = new ArrayList<>();
        clients.add(new Client("Emil"));
        clients.add(new Client("Ivan"));
        clients.add(new Client("Stoqn"));
        clients.add(new Client("Parvan"));

        return clients;
    }
}
