package com.james.api.common.service;
import com.james.api.user.model.User;
import com.james.api.common.component.Messenger;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public abstract class AbstractService <T> {
    public abstract Messenger save (T t);

    public abstract List<T> findAll() throws SQLException;

    public abstract Optional<T> findById(long id);

    public abstract String count();

    public  abstract  Optional<T> getOne(String id);

    public  abstract  String delete(T t);

    public  abstract  String deleteAll();

    public  abstract  Boolean existsById(long id);


    public abstract Messenger insertMenuData(User user) throws SQLException;
}