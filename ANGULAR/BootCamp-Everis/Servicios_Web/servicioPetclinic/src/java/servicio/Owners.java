/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Marco Elio
 */
@Entity
@Table(name = "owners")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Owners.findAll", query = "SELECT o FROM Owners o")
    , @NamedQuery(name = "Owners.findById", query = "SELECT o FROM Owners o WHERE o.id = :id")
    , @NamedQuery(name = "Owners.findByFirstName", query = "SELECT o FROM Owners o WHERE o.firstName = :firstName")
    , @NamedQuery(name = "Owners.findByLastName", query = "SELECT o FROM Owners o WHERE o.lastName = :lastName")
    , @NamedQuery(name = "Owners.findByAddress", query = "SELECT o FROM Owners o WHERE o.address = :address")
    , @NamedQuery(name = "Owners.findByCity", query = "SELECT o FROM Owners o WHERE o.city = :city")
    , @NamedQuery(name = "Owners.findByTelephone", query = "SELECT o FROM Owners o WHERE o.telephone = :telephone")})
public class Owners implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 30)
    @Column(name = "first_name")
    private String firstName;
    @Size(max = 30)
    @Column(name = "last_name")
    private String lastName;
    @Size(max = 255)
    @Column(name = "address")
    private String address;
    @Size(max = 80)
    @Column(name = "city")
    private String city;
    @Size(max = 20)
    @Column(name = "telephone")
    private String telephone;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ownerId")
    private Collection<Pets> petsCollection;

    public Owners() {
    }

    public Owners(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @XmlTransient
    public Collection<Pets> getPetsCollection() {
        return petsCollection;
    }

    public void setPetsCollection(Collection<Pets> petsCollection) {
        this.petsCollection = petsCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Owners)) {
            return false;
        }
        Owners other = (Owners) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "servicio.Owners[ id=" + id + " ]";
    }
    
}
