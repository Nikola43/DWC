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
@Table(name = "specialties")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Specialties.findAll", query = "SELECT s FROM Specialties s")
    , @NamedQuery(name = "Specialties.findById", query = "SELECT s FROM Specialties s WHERE s.id = :id")
    , @NamedQuery(name = "Specialties.findByName", query = "SELECT s FROM Specialties s WHERE s.name = :name")})
public class Specialties implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 80)
    @Column(name = "name")
    private String name;
    @ManyToMany(mappedBy = "specialtiesCollection")
    private Collection<Vets> vetsCollection;

    public Specialties() {
    }

    public Specialties(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @XmlTransient
    public Collection<Vets> getVetsCollection() {
        return vetsCollection;
    }

    public void setVetsCollection(Collection<Vets> vetsCollection) {
        this.vetsCollection = vetsCollection;
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
        if (!(object instanceof Specialties)) {
            return false;
        }
        Specialties other = (Specialties) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "servicio.Specialties[ id=" + id + " ]";
    }
    
}
