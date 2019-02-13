/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicio;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Marco Elio
 */
@Entity
@Table(name = "vets")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Vets.findAll", query = "SELECT v FROM Vets v")
    , @NamedQuery(name = "Vets.findById", query = "SELECT v FROM Vets v WHERE v.id = :id")
    , @NamedQuery(name = "Vets.findByFirstName", query = "SELECT v FROM Vets v WHERE v.firstName = :firstName")
    , @NamedQuery(name = "Vets.findByLastName", query = "SELECT v FROM Vets v WHERE v.lastName = :lastName")})
public class Vets implements Serializable {

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
    @JoinTable(name = "vet_specialties", joinColumns = {
        @JoinColumn(name = "vet_id", referencedColumnName = "id")}, inverseJoinColumns = {
        @JoinColumn(name = "specialty_id", referencedColumnName = "id")})
    @ManyToMany
    private Collection<Specialties> specialtiesCollection;

    public Vets() {
    }

    public Vets(Integer id) {
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

    @XmlTransient
    public Collection<Specialties> getSpecialtiesCollection() {
        return specialtiesCollection;
    }

    public void setSpecialtiesCollection(Collection<Specialties> specialtiesCollection) {
        this.specialtiesCollection = specialtiesCollection;
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
        if (!(object instanceof Vets)) {
            return false;
        }
        Vets other = (Vets) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "servicio.Vets[ id=" + id + " ]";
    }
    
}
